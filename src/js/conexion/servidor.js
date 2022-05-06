const listaProductos = () => {
  return fetch("http://localhost:3000/productos").then((respuesta) =>
    respuesta.json()
  );
};

const crearProducto = (imagen, nombre, precio, descripcion, categoria) => {
  return fetch("http://localhost:3000/productos", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      imagen,
      nombre,
      precio,
      descripcion,
      id: uuid.v4(),
      categoria,
    }),
  });
};

const detallesProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`).then((producto) =>
    producto.json());
};

export const productosServicios = {
  listaProductos,
  detallesProducto,
};