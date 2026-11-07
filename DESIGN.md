# Design

## Theme

- **Name**: Espacio de Estilo
- **Version**: 2.0
- **Author**: Barbara Bacelle
- **Register**: Sitio marketing de marca para asesoría de imagen personal.
- **Description**: Sistema visual minimal, luminoso y editorial para una marca de estilo personal. Debe transmitir calma, autenticidad, libertad, elegancia y transformación sin caer en una estética genérica de consultoría.

## Brand Essence

La marca se construye alrededor de una idea central: la imagen personal como reflejo de identidad, no como disfraz. El sitio debe sentirse como un espacio de acompañamiento sereno donde cada mujer pueda reconocerse, ordenarse y evolucionar con confianza.

### Claves De Personalidad

- **Esencia**: mostrar lo propio, no fabricar una imagen artificial.
- **Reflejo**: la imagen externa debe dialogar con la identidad interna.
- **Identidad**: cada decisión visual debe sentirse personal y reconocible.
- **Transformación**: comunicar evolución real, sin promesas exageradas.
- **Libertad**: ligereza, aire, movimiento y ausencia de rigidez.
- **Equilibrio**: composición limpia, contraste medido, ritmo visual tranquilo.
- **Armonía**: colores, tipografía e imágenes deben trabajar como un conjunto.
- **Autenticidad**: tono humano, directo y profesional.
- **Evolución**: la marca acompaña procesos, no vende soluciones instantáneas.
- **Conexión**: cercanía, escucha y presencia personal de Barbara.

## Visual Direction

El universo visual procede del brandbook: agua clara, luz natural, tejidos fluidos, detalles de mar, tonos teal profundos y fondos blancos con mucho espacio. La sensación debe ser fresca y sofisticada, no fría; femenina y elegante, no ornamental.

### Referencias Visuales

- Agua transparente y reflejos de piscina o mar.
- Seda o tejidos satinados en tonos teal.
- Retratos femeninos naturales, con luz suave y actitud segura.
- Arquitectura mediterránea clara, arcos, sombra y horizonte.
- Composiciones editoriales limpias con mucho blanco.
- El símbolo orgánico de la marca como gesto gráfico principal.

### Principios De Composición

- Usar mucho espacio en blanco para crear calma y respiración.
- Priorizar bloques asimétricos, editoriales y aireados frente a grids rígidas.
- Alternar secciones muy limpias con secciones de color teal o celeste suave.
- Evitar saturar la interfaz con iconos, badges, sombras o decoraciones redundantes.
- La fotografía debe aportar emoción y textura; la UI debe aportar claridad.

## Color System

La paleta oficial procede del brandbook. Los tonos teal son el corazón de la marca; los grises azulados actúan como soporte; blanco y negro se usan para contraste, logo y legibilidad.

### Primary: Teal Profundo

| Token | Hex | Uso |
|---|---|---|
| `primary-dark` | `#02636D` | Texto principal, títulos, fondos oscuros, contraste máximo. |
| `primary` | `#0396A6` | CTA principales, enlaces, detalles de marca, superficies comprometidas. |
| `primary-light` | `#39C9D3` | Estados hover, acentos secundarios, detalles gráficos. |
| `primary-lighter` | `#8DE3EC` | Fondos suaves, decoraciones, bloques de apoyo. |
| `primary-lightest` | `#D1F5F7` | Fondos luminosos, áreas de descanso, tarjetas suaves. |

### Secondary: Gris Azulado

| Token | Hex | Uso |
|---|---|---|
| `secondary` | `#BCCBD0` | Líneas divisorias, texto auxiliar puntual, fondos apagados. |
| `secondary-light` | `#E1E8EA` | Fondos de sección, bloques neutros, superficies editoriales. |
| `secondary-lightest` | `#F1F7F8` | Fondo alternativo, zonas muy suaves, separación de contenido. |

### Neutrals

| Token | Hex | Uso |
|---|---|---|
| `white` | `#FFFFFF` | Fondo principal, espacios de máxima limpieza. |
| `black` | `#000000` | Logo sobre fondo claro, detalles de máximo contraste, uso puntual. |

### Reglas De Uso

- El fondo base debe ser `white`, `secondary-lightest` o `secondary-light`.
- No usar `bg-surface`; no existe en este sistema.
- No usar `text-slate-*`; la jerarquía se construye con `text-primary-dark` y opacidades.
- No usar gradientes de texto ni fondos con gradiente. La marca funciona mejor con planos de color, fotografía y espacio.
- Mantener contraste WCAG AA: el texto de lectura debe usar `primary-dark` o blanco sobre fondos oscuros.
- Evitar grises neutros genéricos; si hace falta suavizar, usar la familia secundaria del brandbook.

## Typography

El sistema tipográfico combina una serif editorial, una sans funcional y una script decorativa. La mezcla debe sentirse sofisticada y ligera, nunca sobrecargada.

| Role | Font | Uso | Fallback |
|---|---|---|---|
| Display / Headings | Cormorant Garamond | Titulares, citas, nombres de servicios, bloques editoriales. | `Georgia, serif` |
| Body / UI | DM Sans | Párrafos, navegación, botones, formularios, textos funcionales. | `Arial, Helvetica, sans-serif` |
| Decorative Script | Dancing Script | Firma, palabras acento, gestos decorativos muy puntuales. | `cursive` |

### Nota Técnica Sobre La Script

Usar **Dancing Script** desde Google Fonts para pocos elementos que necesiten distinguirse. No usar variantes script alternativas. La script no debe aparecer en párrafos, navegación, formularios ni textos funcionales.

### Escala Recomendada

- **Hero H1**: `clamp(3rem, 6vw, 6rem)`, Cormorant Garamond, peso 600-700, line-height `1.0-1.02`.
- **H2 editorial**: `clamp(2.25rem, 4vw, 4rem)`, Cormorant Garamond, peso 600-700, line-height `1.08-1.12`.
- **H3 / cards**: `clamp(1.5rem, 2vw, 2rem)`, Cormorant Garamond, peso 600.
- **Body**: `1rem-1.125rem`, DM Sans, line-height 1.65-1.75.
- **Small / metadata**: `0.875rem-1rem`, DM Sans, line-height 1.45-1.55.
- **Script accent**: usar solo en frases cortas o firmas; nunca en párrafos largos.

### Reglas Tipográficas

- Usar `text-wrap: balance` en `h1`, `h2`, `h3`.
- Usar `text-wrap: pretty` en textos largos cuando sea posible.
- Limitar líneas de párrafo a 65-75 caracteres.
- Evitar mayúsculas extensas en body copy.
- Reservar tracking amplio para piezas de logo o labels muy cortos, no para cada sección.
- No repetir una ceja uppercase encima de todas las secciones; usarla solo cuando aporte identidad.

## Logo System

Los logos se usan para recordar a la visitante dónde ha llegado. Deben reservarse para puntos de primer contacto y momentos de identidad clara, no repetirse en exceso dentro de la página.

### Logo Principal

- Uso recomendado: web, portada de presentaciones o books, tarjetas, documentos oficiales.
- En el sitio: navbar, hero o footer, según contraste y disponibilidad de espacio.
- Usar `assets/imgs/logo-barbarabacelle-asesoria_de_imagen_alicante.png` como logo principal de la marca.
- Priorizar fondos claros, blancos o `secondary-lightest` para que el azul del logo conserve presencia y legibilidad.
- Mantener aire alrededor del logo; no encerrarlo en contenedores decorativos innecesarios.

### Variación De Logo

- Usar cuando el logo principal no funcione por proporción o espacio.
- Adecuado para composiciones verticales, bloques editoriales o piezas compactas.
- No mezclar logo principal y variación en el mismo bloque visual salvo que sea una guía de marca.

### Icono / Favicon

- Uso recomendado: favicon, marcas internas, esquina de vídeos, publicaciones de redes y puntos de identidad pequeños.
- El icono `E | E` debe mantenerse simple y muy legible.
- En tamaños pequeños, evitar acompañarlo de texto adicional.

### Firma Instagram

- La firma `@espaciodeestilo` puede aparecer en footer o piezas sociales.
- En web, priorizar legibilidad sobre tracking extremo.

### Assets Actuales

- Fuente visual: `__MATERIALS/BRANDBOOK - ESPACIO DE ESTILO.pdf` y `__MATERIALS/GUIA DE ESTILO - ESPACIO DE ESTILO.pdf`.
- Logo principal en uso: `assets/imgs/logo-barbarabacelle-asesoria_de_imagen_alicante.png`.
- No usar `assets/imgs/logo-espaciodeestilo-light.png` ni `assets/imgs/logo-espaciodeestilo-dark.png` como logos principales en nuevas interfaces.

## Symbols & Decorative Graphics

El símbolo orgánico de la marca es el recurso decorativo principal. Tiene más identidad que un set genérico de iconos y debe sustituir, cuando sea razonable, a ilustraciones o iconografía estándar.

### Uso Del Símbolo

- Como marca sutil en fondos claros o bloques teal.
- Como línea decorativa en secciones introductorias o CTA.
- Como motivo repetido con baja opacidad, siempre con moderación.
- Como elemento de cierre en footer o materiales descargables.

### Reglas

- No usar emoji como iconos principales.
- No usar ilustraciones sketchy o doodles como sustituto del símbolo.
- No llenar cada tarjeta con iconos si el contenido puede respirar sin ellos.
- Si se usan SVG inline, deben ser simples, lineales y coherentes con el grosor del símbolo.

## Imagery

La fotografía debe reforzar la idea de estilo consciente, libertad y presencia. Las imágenes deben sentirse reales, luminosas y cuidadas.

### Dirección Fotográfica

- Luz natural, piel real, poses relajadas y seguras.
- Paleta fotográfica alineada con teal, blanco, agua, cielo, gris azulado y negro suave.
- Evitar stock excesivamente corporativo o sonrisas genéricas.
- Evitar imágenes saturadas en colores ajenos a la paleta.

### Tratamiento

- Preferir recortes amplios y verticales para retratos.
- Usar overlays planos solo si son necesarios para legibilidad.
- No aplicar gradientes decorativos.
- Mantener esquinas sobrias: `rounded-xl` o `rounded-2xl`, no radios exagerados.

## Layout & Spacing

El layout debe parecer editorial y respirado. La web no debe convertirse en una sucesión de tarjetas idénticas; cada sección necesita una función visual propia.

### Escala

- **Max width general**: `max-w-7xl`.
- **Texto largo**: `max-w-2xl` o `max-w-3xl`.
- **Padding sección**: `py-20 md:py-24`, con variaciones cuando el ritmo lo necesite.
- **Padding de bloques**: `p-6`, `p-8` o `md:p-10`.
- **Gaps**: `gap-6` para contenido compacto, `gap-8` o `gap-10` para secciones editoriales.

### Composición

- Alternar columnas texto-imagen, bloques centrados y composiciones asimétricas.
- Usar tarjetas solo cuando agrupen información accionable o comparativa.
- Evitar grids largas de cards idénticas con icono, título y texto.
- Crear jerarquía con tamaño, espacio y color, no con decoración excesiva.

### Hero `#inicio`

- Las páginas principales deben usar una estructura hero coherente con la home.
- En desktop, la imagen debe ocupar la mitad derecha como capa visual a altura completa.
- El contenido textual debe permanecer dentro del contenedor centrado `max-w-7xl`.
- En mobile, el texto mantiene su contenedor y la imagen aparece debajo a ancho completo, sin márgenes laterales.
- Cada página puede mantener su propia imagen hero; se unifica la estructura, no el asset.

## Components

### Buttons

- Botón principal: `bg-primary` o `bg-primary-dark`, texto blanco, forma `rounded-full`.
- Botón secundario: fondo transparente o blanco, texto `primary-dark`, borde solo si no hay sombra.
- Labels con verbo y objeto: `Reservar consulta`, `Ver servicios`, `Escribir por WhatsApp`.
- No usar sombra y borde juntos en el mismo botón.

### Cards

- Usar `rounded-2xl` como máximo habitual.
- Elegir una sola técnica de separación: fondo contrastado, sombra suave o borde fino.
- No combinar `border` + `shadow` en la misma card.
- Evitar cards dentro de cards.
- El contenido debe justificar la card; si no, usar layout editorial abierto.

### Toolbar / Navigation

- Toolbar flotante y compacta en forma de píldora: `max-w-[428px]`, `h-[76px]`, `rounded-2xl`, centrada con `mx-auto` dentro de un margen de `p-5`.
- Contenido mínimo en todos los breakpoints: logo a la izquierda y botón hamburguesa a la derecha. No hay navegación horizontal en desktop; todas las opciones viven en el menú abierto.
- Superficie: `bg-white` con `drop-shadow-[0_8px_16px_rgba(0,0,0,0.08)]`. En desktop es transparente en la parte superior de la página y toma la superficie blanca al hacer scroll o con el menú abierto.
- Texto e iconos en `primary-dark`.
- En mobile, mantener hit targets de 48px mínimo (hamburguesa `w-[60px]` a toda la altura de la toolbar).

### CTA Sections

- Deben sentirse como una invitación serena, no como un banner agresivo.
- Usar `primary-dark`, `primary` o `primary-lightest` como base plana.
- La script puede aparecer como acento en una palabra o frase corta.
- No usar gradientes ni efectos brillantes.

### Forms

- Inputs con `rounded-lg`, foco visible y labels claros.
- Texto de ayuda en `primary-dark/70`, no gris genérico.
- Botón de envío claro y orientado a acción.

## Motion

La animación debe acompañar la calma de la marca. El movimiento ideal es suave, ligero y casi editorial.

### Permitido

- Reveals con opacidad y desplazamiento corto.
- Transiciones de toolbar suaves.
- Stagger sutil en listas o galerías cuando mejore la lectura.
- Duraciones entre 250ms y 700ms para UI; hasta 1200ms para reveals puntuales.
- Easing tipo ease-out quart/quint; sin rebotes.

### Evitar

- Bounce, elastic easing o animaciones llamativas.
- Animar propiedades de layout si no es necesario.
- Ocultar contenido por defecto esperando a que JS lo revele.
- Repetir exactamente el mismo reveal en todas las secciones sin intención.

### Reduced Motion

- Respetar siempre `prefers-reduced-motion`.
- En reduced motion, sustituir desplazamientos por crossfade o estado instantáneo.

## Accessibility

- Objetivo mínimo: WCAG AA.
- Texto de lectura: `primary-dark` sobre fondos claros.
- Texto blanco solo sobre `primary`, `primary-dark`, negro o fotografía suficientemente oscurecida.
- Foco visible en enlaces, botones, inputs y controles de navegación.
- Hit targets mínimos de 48px en mobile.
- No depender únicamente del color para comunicar estado.
- Las imágenes decorativas deben tener `alt=""`; las informativas deben describir su función.
- Mantener estructura semántica con un solo `h1` por página.

## Technical Constraints

- Stack previsto: PHP 8.x, Apache/XAMPP, HTML5, Vanilla JS y Tailwind CSS v3 vía Play CDN.
- No existe `PRODUCT.md`; las referencias principales del sitio están en `AGENTS.md`.
- No añadir npm, `node_modules`, bundlers ni build step de Tailwind.
- No introducir frameworks PHP ni estructura Composer.
- No modificar `__MATERIALS/`; es solo referencia.
- Mantener el copy visible en español.
- No hardcodear `/barbarabacelle4/` en enlaces ni rutas de assets.
- Los partials PHP reutilizables viven en `template/`.
- Las imágenes viven en `assets/imgs/`.
- Usar `assets/css/custom.css` solo para efectos o overrides que Tailwind no exprese limpiamente.
- Mantener el JS de cliente en `assets/js/main.js`.

## Quality Bar

- La web debe sentirse diseñada para esta marca, no generada desde una plantilla genérica.
- Nada de gradient text, glassmorphism decorativo, side-stripe cards, hero metrics cliché o grids interminables de tarjetas iguales.
- Evitar copy grandilocuente o buzzwords; la voz debe ser clara, cercana y concreta.
- Cada elemento visual debe cumplir una función: orientar, respirar, reforzar identidad o facilitar acción.
- La experiencia final debe ser calmada, luminosa, profesional y memorable.

## Responsive Breakpoints

Usar los breakpoints por defecto de Tailwind CSS v3, sin crear puntos intermedios salvo que una necesidad real del contenido lo justifique:

| Breakpoint | Ancho mínimo | Uso principal |
|---|---:|---|
| Base | 0 px | Mobile first, una columna, toolbar fija en la parte inferior. |
| `sm` | 640 px | Ajustes para móviles grandes y composiciones estrechas; la toolbar pasa a sticky superior. |
| `md` | 768 px | Tablet y dos columnas. |
| `lg` | 1024 px | Desktop y hero editorial; el menú abierto se cierra al llegar a este ancho. |
| `xl` | 1280 px | Contenedor `max-w-7xl` y composiciones amplias. |
| `2xl` | 1536 px | Solo para controlar el aire lateral, sin ampliar demasiado el texto. |

El diseño debe partir de mobile y escalar mediante `md:`, `lg:` y `xl:`. No crear layouts que dependan únicamente de un ancho concreto.

## Spacing, Sizing & Rhythm

- Contenedor global: `mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10`.
- Secciones: `py-20 md:py-24 lg:py-32`.
- Bloques editoriales: `gap-8 lg:gap-16`.
- Texto largo: `max-w-2xl` o `max-w-3xl`.
- Medida de lectura: aproximadamente 65–75 caracteres por línea.
- Botones y controles: altura mínima `min-h-12`, padding horizontal `px-6`.
- Radios: `rounded-lg` para inputs y `rounded-2xl` como máximo habitual para bloques.
- Jerarquía vertical: usar múltiplos coherentes de `4`, `6`, `8`, `10`, `12` y `16`; evitar valores arbitrarios repetidos.

## Navigation, Footer & Page Shell

La navegación es una toolbar flotante, ligera y persistente (ver **Toolbar / Navigation**).

**Posición y comportamiento**

- Mobile (base, < `sm`): toolbar fija en la parte inferior de la pantalla (`fixed inset-x-0 bottom-0 h-[116px]`). El layout reserva su espacio con `pb-[116px] sm:pb-0` para que no tape el contenido; los elementos flotantes (botón de WhatsApp) se colocan por encima (`bottom-[136px] sm:bottom-5`).
- `sm` y superiores: toolbar `sticky top-0` en la parte superior.
- En ambos casos se oculta al hacer scroll hacia abajo (`translate-y-[116px]` en mobile, `sm:-translate-y-[116px]` arriba) y reaparece al subir o cerca del inicio de la página. Transición `transition-transform duration-400`.

**Botón de menú**

- Hamburguesa de tres líneas (`h-0.5 w-5 rounded-full bg-current`, `gap-1.5`) que se transforma en una X al abrir (`translate-y-2 rotate-45`, línea central `opacity-0`, `-translate-y-2 -rotate-45`).
- `aria-expanded`, `aria-controls` y `aria-label` ("Abrir menú" / "Cerrar menú"), con foco visible.

**Menú abierto**

- Overlay a pantalla completa por encima de todo (`fixed inset-0 z-[70] min-h-[100dvh]`) con fondo `bg-white/90 backdrop-blur-[3px]` y fade de opacidad de 300 ms.
- Contenido centrado en una columna `max-w-xl`: logo (`max-w-[250px]`), enlaces grandes (`text-2xl sm:text-3xl font-semibold text-primary-dark hover:text-primary`) y una única acción principal: botón píldora `bg-primary` "Reserva tu asesoría" (`min-w-[260px] px-10 py-4 text-lg`).
- Botón de cierre circular de 48px arriba a la derecha.
- Se cierra con la X, con Escape, al pulsar un enlace o el fondo, y al pasar a ≥ `lg`. Mientras está abierto, bloquea el scroll de la página y lleva el foco al botón de cierre; al cerrar con Escape o la X, el foco vuelve a la hamburguesa.

Foco visible en todos los controles: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`.

El footer debe cerrar la experiencia con logo, contacto, enlaces esenciales, Instagram y aviso legal. Usar una composición de una columna en mobile y dos o tres zonas en `md:`; evitar repetir todas las opciones de la navbar.

## Component States

Todos los elementos interactivos deben definir estados visibles:

- Enlace o botón: `transition-colors duration-300 hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:scale-[.98]`.
- Botón desactivado: `disabled:pointer-events-none disabled:opacity-50`.
- Input: `border-secondary focus:border-primary focus:ring-2 focus:ring-primary/30`.
- Error de formulario: `border-red-700 text-red-800`, mensaje asociado con `aria-describedby`.
- Éxito: usar texto y un indicador visual, nunca depender solo del color.
- Carga: preferir texto contextual (“Enviando…”) y mantener estable el layout.

No combinar `border` y `shadow` en una misma card o botón.

## Image & Asset Specifications

- Hero desktop: imagen vertical o panorámica con al menos 1600 px de ancho cuando ocupe media pantalla.
- Imagen editorial: proporción recomendada `4/5` o `3/4`; usar `aspect-[4/5] object-cover`.
- Miniaturas o tarjetas: `aspect-[4/3] object-cover`.
- Logo: archivo `logo-barbara-bacelle-asesoria-de-imgen-conciente.svg` (todo en negro). En el header (toolbar y menú abierto) se usa la variante `logo-barbara-bacelle-asesoria-de-imgen-conciente-header.svg`, con "Bacelle" en `primary` (#0396A6) y el resto en negro. Conservar proporción original: `h-10 w-auto` en la toolbar en mobile y `sm:h-14` (con `sm:pl-4`) desde `sm`, `max-w-[250px] w-full h-auto` en el menú abierto y `h-16 w-auto` en el footer. En el footer (fondo `primary-dark`) se usa en blanco con `brightness-0 invert`.
- Favicon: usar el símbolo `E | E` en formato cuadrado.
- Añadir `loading="lazy"` a imágenes fuera del primer viewport y `decoding="async"` cuando sea apropiado.
- Usar `alt` descriptivo para imágenes informativas y `alt=""` para imágenes puramente decorativas.
- Si falta un asset, mantener una superficie plana de `bg-secondary-lightest` con la proporción reservada; no inventar degradados ni iconos sustitutivos.

## Page Architecture

El sitio se compone de cuatro páginas independientes, enlazadas con URLs limpias:

- **Home:** hero de bienvenida, propuesta de valor, introducción breve a servicios, prueba social si existe y CTA de contacto.
- **Servicios:** presentación clara de cada servicio, para quién es, qué incluye y CTA para reservar consulta.
- **Chi sono:** historia y enfoque de Barbara, fotografía personal, valores y forma de acompañamiento.
- **Contatti:** datos de contacto, WhatsApp, formulario accesible, horarios y zona de atención.

Cada página debe tener un único `h1`, su propia imagen hero y meta description específica. Los partials compartidos de navbar, footer, CTA y formularios viven en `template/`.

## Voice & Copy Guidelines

El tono es cercano, sereno, concreto y profesional. Hablar de acompañamiento, identidad y decisiones prácticas; evitar promesas absolutas, urgencia artificial, lenguaje grandilocuente y jerga de marketing.

- Preferir verbos claros: `Descubre`, `Reserva`, `Escribe`, `Conoce`.
- Usar segunda persona singular en español, con calidez y respeto.
- Mantener frases cortas y párrafos respirados.
- Cada CTA debe indicar acción y destino: `Reservar una consulta`, `Ver los servicios`, `Escribir por WhatsApp`.
- Evitar mayúsculas extensas y repetir la misma ceja en todas las secciones.

## SEO & Accessibility Checklist

- `lang="es"`, título único y meta description de 140–160 caracteres por página.
- Un solo `h1`; usar `h2` y `h3` siguiendo la jerarquía sin saltos arbitrarios.
- URLs limpias y enlaces internos sin `.php` ni rutas hardcodeadas del entorno local.
- Open Graph básico con título, descripción e imagen relevante.
- Enlaces descriptivos, foco visible y navegación completa mediante teclado.
- Labels visibles para cada campo; errores asociados al campo y anunciables por tecnologías de asistencia.
- Contraste mínimo WCAG AA y respeto de `prefers-reduced-motion`.
- Revisar que toda imagen informativa tenga un `alt` útil y que los elementos decorativos no entren en el árbol semántico.

## Reusable Tailwind Class Patterns

Usar estos patrones como punto de partida, ajustándolos al contexto:

- Contenedor: `mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10`.
- Sección editorial: `py-20 md:py-24 lg:py-32`.
- Ceja: `font-sans text-sm font-medium uppercase tracking-[0.18em] text-primary-dark/70`.
- Título: `font-serif text-4xl font-semibold leading-[1.05] text-primary-dark md:text-5xl lg:text-6xl`.
- Texto: `max-w-2xl font-sans text-base leading-7 text-primary-dark/80 md:text-lg md:leading-8`.
- Botón principal: `inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-3 font-sans font-medium text-white transition-colors hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary`.
- Botón secundario: `inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 font-sans font-medium text-primary-dark ring-1 ring-primary-dark/20 transition-colors hover:bg-primary-lightest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary`.
- Card: `rounded-2xl bg-secondary-lightest p-6 md:p-8`.
- Input: `min-h-12 w-full rounded-lg border border-secondary bg-white px-4 text-primary-dark placeholder:text-primary-dark/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30`.

Estas clases son convenciones reutilizables, no componentes cerrados: la composición debe seguir siendo editorial y evitar repetir grids de tarjetas idénticas.
