import { productosServicios } from "./conexion/servidor.js";

const starWars = document.querySelector("[data-starWars]");
const consolas = document.querySelector("[data-consolas]");
const diversos = document.querySelector("[data-diversos]");

let starwar = 0;
let consola = 0;
let diverso = 0;

productosServicios.listaProductos().then((data) => {
  data.forEach((element) => {
    if (element.categoria == "starWars" && starwar < 6) {
      for (var i = 0; i < 1; i++) {
        const li = document.createElement("li");
        li.classList.add("producto")

        const contenido = `<div class="imagen-producto">
              <a id="${element.id}" href="./src/pages/producto.html?id=${element.id}?catg=${element.categoria}">
                <img src="${element.imagen}" alt="imagen de producto" />
              </a>
              </div>
              <div class="info-producto">
                <h4 class="nombre-producto">${element.nombre}</h4>
                <p class="precio-producto">${element.precio}</p>
              </div>`;

        li.innerHTML = contenido;
        starWars.appendChild(li);
        starwar++;
      }
    } else if(element.categoria == "consola" && consola < 6){
        for (var i = 0; i < 1; i++) {
            const li = document.createElement("li");
            li.classList.add("producto")
    
            const contenido = `<div class="imagen-producto">
                  <a id="${element.id}" href="./src/pages/producto.html?id=${element.id}?catg=${element.categoria}">
                    <img src="${element.imagen}" alt="imagen de producto" />
                  </a>
                  </div>
                  <div class="info-producto">
                    <h4 class="nombre-producto">${element.nombre}</h4>
                    <p class="precio-producto">${element.precio}</p>
                  </div>`;
    
            li.innerHTML = contenido;
            consolas.appendChild(li);
            consola++;
          }
    } else if(element.categoria == "otro" && diverso < 6){
        for (var i = 0; i < 1; i++) {
            const li = document.createElement("li");
            li.classList.add("producto")
    
            const contenido = `<div class="imagen-producto">
                  <a id="${element.id}" href="./src/pages/producto.html?id=${element.id}?catg=${element.categoria}">
                    <img src="${element.imagen}" alt="imagen de producto" />
                  </a>
                  </div>
                  <div class="info-producto">
                    <h4 class="nombre-producto">${element.nombre}</h4>
                    <p class="precio-producto">${element.precio}</p>
                  </div>`;
    
            li.innerHTML = contenido;
            diversos.appendChild(li);
            diverso++;
          }
    }
  });
});
