/**
 * Main JS - Barbara Bacelle
 * Interacciones y funcionalidades del sitio
 */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Toggle del menú móvil ----
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerTop = document.getElementById('hamburger-top');
    const hamburgerMid = document.getElementById('hamburger-mid');
    const hamburgerBot = document.getElementById('hamburger-bot');
    const siteToolbar = document.getElementById('site-toolbar');
    const toolbarWrapper = document.getElementById('toolbar-wrapper');
    const mobileToolbarMediaQuery = window.matchMedia('(max-width: 639px)');

    let lastScrollY = window.scrollY;
    let isTicking = false;

    const syncToolbarBodyClass = () => {
        if (!siteToolbar) {
            return;
        }

        document.body.classList.toggle('has-toolbar-mobile', mobileToolbarMediaQuery.matches);
    };

    const updateToolbarState = () => {
        if (!siteToolbar || !toolbarWrapper || !mobileMenu) {
            return;
        }

        const currentScrollY = window.scrollY;
        const isTop = currentScrollY <= 8;
        const isMenuOpen = mobileMenu.getAttribute('aria-hidden') === 'false';
        const isMobileViewport = mobileToolbarMediaQuery.matches;
        const isScrollingDown = currentScrollY > lastScrollY + 2;
        const isScrollingUp = currentScrollY < lastScrollY - 2;

        toolbarWrapper.classList.toggle('toolbar-surface', isMenuOpen || isMobileViewport || !isTop);

        if (isMenuOpen) {
            siteToolbar.classList.add('toolbar-open');
            siteToolbar.classList.remove('toolbar-hidden');
            lastScrollY = currentScrollY;
            return;
        }

        siteToolbar.classList.remove('toolbar-open');

        if (currentScrollY < 24) {
            siteToolbar.classList.remove('toolbar-hidden');
        } else if (isScrollingDown) {
            siteToolbar.classList.add('toolbar-hidden');
        } else if (isScrollingUp) {
            siteToolbar.classList.remove('toolbar-hidden');
        }

        lastScrollY = currentScrollY;
    };

    const onToolbarScroll = () => {
        if (!siteToolbar || isTicking) {
            return;
        }

        isTicking = true;

        window.requestAnimationFrame(() => {
            updateToolbarState();
            isTicking = false;
        });
    };

    const setMenuState = (isOpen) => {
        if (!menuToggle || !mobileMenu) {
            return;
        }

        if (isOpen) {
            mobileMenu.classList.remove('hidden', 'pointer-events-none', 'opacity-0');
            mobileMenu.setAttribute('aria-hidden', 'false');
            document.body.classList.add('overflow-hidden');
        } else {
            mobileMenu.classList.add('pointer-events-none', 'opacity-0');
            mobileMenu.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('overflow-hidden');

            window.setTimeout(() => {
                if (mobileMenu.getAttribute('aria-hidden') === 'true') {
                    mobileMenu.classList.add('hidden');
                }
            }, 300);
        }

        menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

        if (hamburgerTop && hamburgerMid && hamburgerBot) {
            hamburgerTop.classList.toggle('rotate-45', isOpen);
            hamburgerTop.classList.toggle('translate-y-2', isOpen);
            hamburgerMid.classList.toggle('opacity-0', isOpen);
            hamburgerBot.classList.toggle('-rotate-45', isOpen);
            hamburgerBot.classList.toggle('-translate-y-2', isOpen);
        }

        updateToolbarState();
    };

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('hidden');
            setMenuState(isOpen);
        });

        if (menuClose) {
            menuClose.addEventListener('click', () => {
                setMenuState(false);
                menuToggle.focus();
            });
        }

        // Cierra el menú al pulsar en un enlace
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                setMenuState(false);
            });
        });

        mobileMenu.addEventListener('click', (event) => {
            if (event.target === mobileMenu) {
                setMenuState(false);
            }
        });

        // Cierra el menú con Escape
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
                setMenuState(false);
                menuToggle.focus();
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                setMenuState(false);
            }

            syncToolbarBodyClass();
            updateToolbarState();
        });
    }

    syncToolbarBodyClass();
    updateToolbarState();

    if (siteToolbar) {
        window.addEventListener('scroll', onToolbarScroll, { passive: true });
        mobileToolbarMediaQuery.addEventListener('change', () => {
            syncToolbarBodyClass();
            updateToolbarState();
        });
    }

    // ---- Animate.css on scroll ----
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (animatedElements.length) {
        if (prefersReducedMotion) {
            animatedElements.forEach((element) => {
                element.classList.add('animate__animated');
            });
        } else {
            const revealElement = (element) => {
                const animationClass = element.getAttribute('data-animate') || 'animate__fadeInUp';
                element.classList.add('animate__animated', animationClass);
            };

            const revealVisibleElements = () => {
                animatedElements.forEach((element) => {
                    if (element.classList.contains('animate__animated')) {
                        return;
                    }

                    const rect = element.getBoundingClientRect();
                    const isVisible = rect.top < (window.innerHeight * 0.92) && rect.bottom > 0;

                    if (isVisible) {
                        revealElement(element);
                    }
                });
            };

            const observer = new IntersectionObserver((entries, observerInstance) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        revealElement(entry.target);
                        observerInstance.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.01,
                rootMargin: '0px'
            });

            animatedElements.forEach((element) => {
                observer.observe(element);
            });

            revealVisibleElements();
            window.addEventListener('scroll', revealVisibleElements, { passive: true });
            window.addEventListener('resize', revealVisibleElements);
        }
    }

    // ---- Animated Counters ----
    const statCounters = document.querySelectorAll('.stat-counter');

    if (statCounters.length) {
        const setCounterValue = (counter, value) => {
            const prefix = counter.dataset.prefix || '';
            counter.textContent = `${prefix}${value}`;
        };

        if (prefersReducedMotion) {
            statCounters.forEach((counter) => {
                setCounterValue(counter, Number(counter.dataset.target || 0));
            });
        } else {
            const animateCounter = (counter) => {
                if (counter.dataset.animated === 'true') {
                    return;
                }

                const target = Number(counter.dataset.target || 0);
                const duration = 2000;
                const startTime = performance.now();

                counter.dataset.animated = 'true';

                const updateCounter = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easedProgress = progress < 0.5
                        ? 4 * Math.pow(progress, 3)
                        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                    const currentValue = Math.round(target * easedProgress);

                    setCounterValue(counter, currentValue);

                    if (progress < 1) {
                        window.requestAnimationFrame(updateCounter);
                    } else {
                        setCounterValue(counter, target);
                    }
                };

                setCounterValue(counter, 0);
                window.requestAnimationFrame(updateCounter);
            };

            const counterObserver = new IntersectionObserver((entries, observerInstance) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        observerInstance.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.35,
                rootMargin: '0px 0px -5% 0px'
            });

            statCounters.forEach((counter) => {
                counterObserver.observe(counter);
            });
        }
    }

    // ---- Formulario de contacto via AJAX ----
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        const statusElement = document.getElementById('form-status');
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const initialButtonLabel = submitButton ? submitButton.textContent.trim() : 'Envía mi petición';
        const formConfig = window.BB_FORM_CONFIG || {};

        const setStatus = (message, tone) => {
            if (!statusElement) {
                return;
            }

            statusElement.textContent = message;
            statusElement.classList.remove('hidden', 'text-red-700', 'text-green-700', 'text-primary-dark/70');

            if (tone === 'success') {
                statusElement.classList.add('text-green-700');
            } else if (tone === 'error') {
                statusElement.classList.add('text-red-700');
            } else {
                statusElement.classList.add('text-primary-dark/70');
            }
        };

        const setLoadingState = (isLoading) => {
            if (!submitButton) {
                return;
            }

            submitButton.disabled = isLoading;
            submitButton.classList.toggle('opacity-70', isLoading);
            submitButton.classList.toggle('cursor-not-allowed', isLoading);
            submitButton.textContent = isLoading ? 'Enviando...' : initialButtonLabel;
        };

        const getFieldValue = (name) => {
            const field = contactForm.elements.namedItem(name);

            if (!field || !('value' in field)) {
                return '';
            }

            return String(field.value || '').trim();
        };

        const waitForRecaptcha = () => new Promise((resolve, reject) => {
            const deadline = Date.now() + 5000;

            const poll = () => {
                if (window.grecaptcha && typeof window.grecaptcha.ready === 'function' && typeof window.grecaptcha.execute === 'function') {
                    resolve(window.grecaptcha);
                    return;
                }

                if (Date.now() > deadline) {
                    reject(new Error('No se ha podido cargar la validación anti-spam.'));
                    return;
                }

                window.setTimeout(poll, 100);
            };

            poll();
        });

        const requestRecaptchaToken = async () => {
            const siteKey = String(formConfig.recaptchaSiteKey || '').trim();
            const allowBypass = Boolean(formConfig.allowCaptchaBypass);

            if (!siteKey) {
                if (allowBypass) {
                    return '';
                }

                throw new Error('No se ha configurado reCAPTCHA.');
            }

            const grecaptcha = await waitForRecaptcha();

            return new Promise((resolve, reject) => {
                grecaptcha.ready(() => {
                    grecaptcha.execute(siteKey, { action: 'contact_form' })
                        .then(resolve)
                        .catch(() => reject(new Error('No se ha podido validar el envío.')));
                });
            });
        };

        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const name = getFieldValue('nombre');
            const email = getFieldValue('email');
            const message = getFieldValue('mensaje');

            if (!name || !email || !message) {
                setStatus('Completa nombre, email y mensaje.', 'error');
                return;
            }

            setStatus('Enviando tu mensaje...', 'neutral');
            setLoadingState(true);

            try {
                const recaptchaToken = await requestRecaptchaToken();
                const formData = new FormData(contactForm);

                if (recaptchaToken) {
                    formData.append('recaptcha_token', recaptchaToken);
                }

                const response = await fetch(formConfig.submitUrl || contactForm.action, {
                    method: 'POST',
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                        'Accept': 'application/json',
                    },
                    body: formData,
                });

                const data = await response.json().catch(() => null);

                if (!response.ok || !data || data.ok !== true) {
                    throw new Error((data && data.message) ? data.message : 'No se ha podido enviar el mensaje.');
                }

                setStatus(data.message || 'Gracias. Tu mensaje ha sido enviado correctamente.', 'success');
                contactForm.reset();
            } catch (error) {
                setStatus(error instanceof Error ? error.message : 'No se ha podido enviar el mensaje.', 'error');
            } finally {
                setLoadingState(false);
            }
        });
    }

});
