const listaProductos = () => {
  return fetch("http://localhost:3000/productos").then((respuesta) =>
    respuesta.json()
  );
};

const crearProducto = (imagen, nombre, precio, categoria, descripcion) => {
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
    producto.json()
  );
};

const categoriaProducto = (categoria) => {
  return fetch(`http://localhost:3000/productos/${categoria}`).then(
    (producto) => producto.json()
  );
};

const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "DELETE",
  });
};

export const productosServicios = {
  listaProductos,
  detallesProducto,
  crearProducto,
  eliminarProducto,
};
