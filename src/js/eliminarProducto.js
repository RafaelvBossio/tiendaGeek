import { productosServicios } from "./conexion/servidor.js";

const eliminarProducto = () => {
  const iconEliminar = document.querySelectorAll("#eliminar");
  iconEliminar.forEach((element) => {
    element.addEventListener("click", () => {
      const divControles = element.parentNode;
      const imagen = divControles.parentElement;
      const producto = imagen.parentElement;
      const id = imagen.querySelector("a").getAttribute("id");
      producto.style.transition = "1s";
      producto.style.opacity = "0%";
      setTimeout(() => {
        producto.style.display = "none";
        productosServicios
          .eliminarProducto(id)
          .then((repuesta) => {})
          .catch((err) => {
            alert("No se pudo eliminar el producto.");
          });
      }, 1000);
    });
  });
};

export const eliminar = {
  eliminarProducto,
};
