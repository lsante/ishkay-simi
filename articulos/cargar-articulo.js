// Carga el contenido de un artículo desde un archivo de puro texto
// y lo inserta en la plantilla visual. Así, para editar un artículo
// solo hay que tocar el archivo .txt (sin ninguna etiqueta de código).

function escaparHtml(texto) {
  return texto
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderizarParrafos(bloqueTexto) {
  return bloqueTexto
    .trim()
    .split(/\n\s*\n/)
    .map((bloque) => {
      const limpio = bloque.trim();
      if (limpio.startsWith("## ")) {
        return `<h3>${escaparHtml(limpio.slice(3).trim())}</h3>`;
      }
      return `<p>${escaparHtml(limpio)}</p>`;
    })
    .join("\n");
}

async function cargarArticulo(config) {
  const colQu = document.getElementById("col-qu");
  const colEs = document.getElementById("col-es");
  const metaTema = document.getElementById("meta-tema");
  const metaTitulo = document.getElementById("meta-titulo");
  const metaAutoras = document.getElementById("meta-autoras");

  try {
    const url = config.fuente + "?v=" + Date.now();
    const respuesta = await fetch(url, { cache: "no-store" });
    if (!respuesta.ok) throw new Error("No se encontró el archivo de contenido");
    const texto = await respuesta.text();

    const partes = texto.split(/\n\s*===\s*\n/);
    if (partes.length < 3) {
      throw new Error("El archivo de texto no tiene el formato esperado (faltan los separadores ===)");
    }
    const [bloqueMeta, bloqueQu, bloqueEs] = partes;

    const meta = {};
    bloqueMeta
      .trim()
      .split("\n")
      .forEach((linea) => {
        const idx = linea.indexOf(":");
        if (idx > -1) {
          const clave = linea.slice(0, idx).trim();
          const valor = linea.slice(idx + 1).trim();
          meta[clave] = valor;
        }
      });

    if (meta.titulo) document.title = meta.titulo;
    if (metaTema) metaTema.textContent = meta.tema || "";
    if (metaTitulo) metaTitulo.textContent = meta.titulo || "";
    if (metaAutoras) metaAutoras.textContent = meta.autoras || "";

    if (colQu) colQu.innerHTML = renderizarParrafos(bloqueQu);
    if (colEs) colEs.innerHTML = renderizarParrafos(bloqueEs);
  } catch (error) {
    console.error(error);
    const mensaje = `<p>No se pudo cargar el contenido de este artículo. (${error.message})</p>`;
    if (colQu) colQu.innerHTML = mensaje;
    if (colEs) colEs.innerHTML = "";
  }
}
