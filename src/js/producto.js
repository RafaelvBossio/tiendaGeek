import { productosServicios } from "./conexion/servidor.js";

const url = new URL(window.location);
const id = url.searchParams.get("id");
const end = id.lastIndexOf("catg=");
const categoria = id.substring(end + 5);
const ul = document.querySelector("[data-similares]");
var cantidad = 6;

productosServicios.listaProductos().then((data) => {
  data.forEach((element) => {
    const id2 = element.id;
    if (element.categoria === categoria && cantidad > 0) {
      const li = document.createElement("li");
      li.classList.add("producto");
      const contenido = `<div class="imagen-producto"><a id="${element.id}" href="./producto.html?id=${element.id}?catg=${element.categoria}"><img src="${element.imagen}" alt="imagen de producto" /></a></div><div class="info-producto"><h4 class="nombre-producto">${element.nombre}</h4><p class="precio-producto">${element.precio}</p></div>`;
      li.innerHTML = contenido;
      ul.appendChild(li);
      cantidad--;
    }
  });
});
