const listaProductos = () => {
  return fetch("http://localhost:3000/productos").then((respuesta) =>
    respuesta.json()
  );
};

const detallesProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`).then((producto) =>
    producto.json());
};

export const productosServicios = {
  listaProductos,
  detallesProducto,
};