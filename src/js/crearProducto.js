import { productosServicios } from "./conexion/servidor.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const imagen = formulario.querySelector("#imagen-url").value;
  const nombre = formulario.querySelector("#nombre").value;
  const precio = formulario.querySelector("#precio").value;
  const categoria = formulario.querySelector("#categoria").value;
  const descripcion = formulario.querySelector("#descripcion").value;

  productosServicios
    .crearProducto(imagen, nombre, precio, categoria, descripcion)
    .then((respuesta) => {})
    .catch((err) => alert("Ocurrio un problema"));
});
