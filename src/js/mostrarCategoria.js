import { productosServicios } from "./conexion/servidor.js";

const starWars = document.querySelector("[data-starWars]");
const consolas = document.querySelector("[data-consolas]");
const diversos = document.querySelector("[data-diversos]");

function mostrarProductos(array, categoria, cantidad, ul) {
  let bandera = 0;
  
  array.forEach((element) => {
    if (element.categoria == categoria && bandera < cantidad) {
      for (var i = 0; i < 1; i++) {
        const li = document.createElement("li");
        li.classList.add("producto");

        const contenido = `<div class="imagen-producto"><a id="${element.id}" href="./src/pages/producto.html?id=${element.id}?catg=${element.categoria}"><img src="${element.imagen}" alt="imagen de producto" /></a></div><div class="info-producto"><h4 class="nombre-producto">${element.nombre}</h4><p class="precio-producto">${element.precio}</p></div>`;

        li.innerHTML = contenido;
        ul.appendChild(li);
        bandera++;
      }
    }
  });
}

productosServicios.listaProductos().then((data) => {
  mostrarProductos(data, "starWars", 6, starWars);
  mostrarProductos(data, "consola", 6, consolas);
  mostrarProductos(data, "otro", 6, diversos);
});
