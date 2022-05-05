import { productosServicios } from "./conexion/servidor.js";
const galeriaProductos = document.querySelector("[data-productos]");

const mostrarProductos = (urlImg, nombreProducto, precioProducto) => {
  const producto = document.createElement("li");
  producto.classList.add("producto");
  const crearProducto = `
<div class="imagen-producto">
  <img
    src="${urlImg}"
    alt="imagen de producto"
  />
</div>
<div class="info-producto">
  <h4 class="nombre-producto">${nombreProducto}</h4>
  <p class="precio-producto">${precioProducto}</p>
  <a id="aproducto" href="#"></a>
</div>
`;

  galeriaProductos.appendChild(producto);
  producto.innerHTML = crearProducto;
};

productosServicios.listaProductos().then((data) => {
  data.forEach((data) => {
    mostrarProductos(data.urlImagen, data.nombre, data.precio);
  });
});
