# Cómo publicar Iskay Simi gratis (sin usar la terminal)

Vas a usar **GitHub Pages**: un servicio gratuito de GitHub que convierte una
carpeta de archivos en una página web real, con su propia dirección
(ej. `tunombre.github.io/iskay-simi`). Todo se hace desde el navegador.

## Paso 1: Crear una cuenta en GitHub
1. Ve a **github.com** y crea una cuenta gratuita (si no tienes una).

## Paso 2: Crear el repositorio (la "carpeta" del proyecto)
1. Haz clic en el botón verde **"New"** (o el ícono **+** arriba a la derecha → "New repository").
2. Ponle de nombre, por ejemplo, `iskay-simi`.
3. Marca la opción **"Public"** (debe ser público para que Pages sea gratis).
4. Haz clic en **"Create repository"**.

## Paso 3: Subir los archivos
1. En la página del repositorio recién creado, busca el enlace que dice
   **"uploading an existing file"** (o el botón **"Add file" → "Upload files"**).
2. Arrastra ahí **todos** los archivos y carpetas de tu proyecto:
   - `index.html`
   - `style.css`
   - la carpeta `articulos` completa (con `proyecto.html` y `suicidio-andino.html` adentro)
3. Baja y haz clic en **"Commit changes"** (puedes dejar el mensaje que aparece por defecto).

## Paso 4: Activar GitHub Pages
1. En tu repositorio, ve a la pestaña **"Settings"**.
2. En el menú de la izquierda, busca **"Pages"**.
3. En "Branch", elige **"main"** y la carpeta **"/ (root)"**, luego **"Save"**.
4. Espera uno o dos minutos. GitHub te mostrará un enlace parecido a:
   `https://tunombre.github.io/iskay-simi/`
5. ¡Esa es tu página! Ábrela y revisa que todo se vea bien.

## Cómo editar el texto de un artículo (sin tocar código)

Cada artículo ahora guarda su texto en un archivo de **puro texto**, dentro de
la carpeta `articulos/contenido/` (por ejemplo, `proyecto.txt`). Ese archivo
NO tiene ninguna etiqueta de código — solo tu texto, organizado así:

```
titulo: Título del artículo
tema: Categoría
autoras: Nombre de las autoras
===
(texto en quechua, un párrafo por línea, separado por una línea en blanco)
## Un subtítulo se escribe así, con ## adelante
(más párrafos si hacen falta)
===
(texto en castellano, misma lógica)
```

Para editar:
1. En GitHub, entra a `articulos/contenido/` y abre el archivo `.txt` que quieras cambiar.
2. Haz clic en el lápiz (✏️) para editar — vas a ver **solo tu texto**, sin ninguna etiqueta.
3. Cambia lo que necesites (recuerda dejar una línea en blanco entre párrafos, y no tocar las líneas `===`).
4. Baja y haz clic en "Commit changes".
5. Espera 1-2 minutos y refresca tu página publicada.

**Importante:** las líneas `===` marcan dónde empieza el quechua y dónde el
castellano — no las borres ni las muevas. Y si quieres un subtítulo dentro
de un idioma, escríbelo con `##` adelante, como en el ejemplo.

## Cómo agregar un artículo nuevo (con este nuevo sistema)

Lo más simple: pásame el texto en quechua y castellano aquí en el chat, y yo
te genero los 3 archivos que necesitas (el `.html` de la plantilla, el `.txt`
con el contenido, y la tarjeta para `index.html`) listos para subir.

Si prefieres hacerlo tú misma:
1. Duplica `articulos/contenido/proyecto.txt`, ponle un nombre nuevo (ej.
   `mi-tema.txt`) y reemplaza el contenido siguiendo el mismo formato.
2. Duplica `articulos/proyecto.html`, ponle un nombre nuevo (ej. `mi-tema.html`),
   y cambia únicamente esta línea al final del archivo:
   `cargarArticulo({ fuente: "contenido/mi-tema.txt" });`
   (cambiando `mi-tema.txt` por el nombre de tu nuevo archivo de texto)
3. En `index.html`, copia una tarjeta `<a class="tarjeta">...</a>` existente
   y actualiza el número, tema, título, resumen y el `href` para que apunte
   a tu nuevo archivo `.html`.

## Nota sobre ver el sitio en tu computadora antes de subirlo

Si abres `index.html` haciendo doble clic en tu computadora, es posible que
los artículos aparezcan en blanco o digan "Cargando…" sin mostrar el texto.
Esto es normal: los navegadores bloquean, por seguridad, que una página cargue
archivos de texto locales de esta manera. **Una vez publicado en GitHub
Pages, esto no pasa** — el sitio funcionará perfectamente. Así que para
revisar los cambios, mejor mira siempre la versión ya publicada
(`tunombre.github.io/iskay-simi/`) en vez de los archivos en tu computadora.


## Sobre el dominio
`tunombre.github.io/iskay-simi` es gratis para siempre, sin vencimiento ni
tarjeta de crédito. Si más adelante quieres un dominio propio como
`iskaysimi.com` (con costo, normalmente 10-15 USD al año), se puede conectar
al mismo sitio sin rehacer nada.
