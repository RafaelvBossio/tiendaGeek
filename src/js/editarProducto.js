import { productosServicios } from "./conexion/servidor.js";

const obtenerInformacion = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    window.location.href = "../pages/productos.html";
  }

  const imagen = document.querySelector("#imagen-url");
  const nombre = document.querySelector("#nombre");
  const precio = document.querySelector("#precio");
  const categoria = document.querySelector("#categoria");
  const descripcion = document.querySelector("#descripcion");

  const informacionProducto = productosServicios.detallesProducto(id)
    .then((producto) => {
      imagen.value = producto.imagen;
      nombre.value = producto.nombre;
      precio.value = producto.precio;
      categoria.value = producto.categoria;
      descripcion.value = producto.descripcion;
    });
};

obtenerInformacion();

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const imagen = document.querySelector("#imagen-url").value;
  const nombre = document.querySelector("#nombre").value;
  const precio = document.querySelector("#precio").value;
  const categoria = document.querySelector("#categoria").value;
  const descripcion = document.querySelector("#descripcion").value;

  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  productosServicios.actualizarProducto(imagen, nombre, precio, categoria, descripcion, id).then(() => {
    window.location.href = "../pages/productos.html";
  });
});
