# 2026-04-04 18:57 - Counter animacion sobre mi

## Resumen

Se ha mejorado el bloque de estadísticas de la sección `Sobre mí` para dar más protagonismo visual a los números y se ha añadido una animación de conteo que se activa cuando el usuario llega a ese punto de la página con el scroll.

## Cambios realizados

- Aumento del tamaño tipográfico de los valores `+20` y `+500`.
- Refuerzo del contraste visual usando `text-primary-dark` y `font-extrabold`.
- Mejora del espaciado entre números y etiquetas para una lectura más clara.
- Adición de atributos `data-target` y `data-prefix` para controlar el conteo animado.
- Implementación de animación con `IntersectionObserver` y `requestAnimationFrame`.
- Compatibilidad con `prefers-reduced-motion`, mostrando el valor final sin animación cuando corresponde.

## Archivos modificados

- `index.php`
- `assets/js/main.js`

## Notas técnicas

- La animación se ejecuta una sola vez por contador.
- El conteo comienza en `0` y termina en el valor configurado en `data-target`.
- No se han añadido dependencias nuevas ni CSS custom adicional para este cambio.

## Verificación

- Validación PHP completada con `php -l index.php`.
- Pendiente verificación visual manual en `http://localhost/barbarabacelle3/` sobre desktop y mobile.
