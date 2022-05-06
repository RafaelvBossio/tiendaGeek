import { productosServicios } from "./conexion/servidor.js";
const galeriaProductos = document.querySelector("[data-productos]");

const mostrarProductos = (
  urlImg,
  nombreProducto,
  precioProducto,
  id,
  categoria
) => {
  const producto = document.createElement("li");
  producto.classList.add("producto");
  const mostrarProducto = `
<div class="imagen-producto">
  <img
    src="${urlImg}"
    alt="imagen de producto"
  />
</div>
<div class="info-producto">
  <h4 class="nombre-producto">${nombreProducto}</h4>
  <p class="precio-producto">${precioProducto}</p>
  <a id="aproducto" href="./producto.html?id=${id}?catg=${categoria}">Ver producto</a>
</div>
`;

  galeriaProductos.appendChild(producto);
  producto.innerHTML = mostrarProducto;
};

productosServicios.listaProductos().then((data) => {
  data.forEach((data) => {
    mostrarProductos(
      data.urlImagen,
      data.nombre,
      data.precio,
      data.id,
      data.categoria
    );
  });
});

export const mostrarProducto = {
  mostrarProductos,
};