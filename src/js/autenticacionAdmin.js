import { productosServicios } from "./conexion/servidor.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#correo").value;
  const senha = document.querySelector("#senha").value;

  productosServicios.admin().then((data) => {

    if (email === data[0].email && senha === data[0].senha) {
      window.location.href = "../pages/productos.html";
    }
  });
});
