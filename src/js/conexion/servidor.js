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

const detalleProducto = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((respuesta) => {
    return respuesta.json();
  });
};

const actualizarProducto = (imagen, nombre, precio, categoria, descripcion, id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imagen, nombre, precio, categoria, descripcion }),
  })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
};

export const productosServicios = {
  listaProductos,
  detallesProducto,
  crearProducto,
  eliminarProducto,
  actualizarProducto,
};
