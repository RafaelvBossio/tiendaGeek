import { productosServicios } from "./conexion/servidor.js";
import { eliminar } from "./eliminarProducto.js";
const galeriaProductos = document.querySelector("[data-productos]");

const mostrarProductos = (
  imagen,
  nombreProducto,
  precioProducto,
  id,
  categoria
) => {
  const producto = document.createElement("li");
  producto.classList.add("producto");
  const mostrarProducto = `
<div class="imagen-producto">
<a id="${id}" href="./producto.html?id=${id}?catg=${categoria}">
  <img src="${imagen}" alt="imagen de producto" />
</a>
<div class="controles">
  <i class="fa-solid fa-trash-can" id="eliminar"></i>
  <i class="fa-solid fa-pen-to-square" id="editar"></i>
</div>
</div>
<div class="info-producto">
  <h4 class="nombre-producto">${nombreProducto}</h4>
  <p class="precio-producto">${precioProducto}</p>
</div>
`;

  galeriaProductos.appendChild(producto);
  producto.innerHTML = mostrarProducto;
};

productosServicios.listaProductos().then((data) => {
  data.forEach((data) => {
    mostrarProductos(
      data.imagen,
      data.nombre,
      data.precio,
      data.id,
      data.categoria
    );
  });
  eliminar.eliminarProducto(  );
});

export const mostrarProducto = {
  mostrarProductos,
};
