import { productosServicios } from "./conexion/servidor.js";

const producto = document.querySelector("[data-producto]");

const obtenerInfo = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    window.location = "../../index.html"
  }

  const imagen = document.querySelector("[data-imagen]");
  const nombre = document.querySelector("[data-nombre]");
  const precio = document.querySelector("[data-precio]");
  const info = document.querySelector("[data-info]");

  const infoProducto = productosServicios
    .detallesProducto(id)
    .then((producto) => {
      imagen.src = producto.urlImagen;
      nombre.textContent = producto.nombre;
      precio.textContent = producto.precio;
      info.textContent = producto.descripcion;
    });
};
obtenerInfo();
