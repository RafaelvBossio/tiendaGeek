//todos Los Productos
const listaProductos = () => {
  return fetch("http://localhost:3000/productos").then((respuesta) =>
    respuesta.json()
  );
};

const admin = () => {
  return fetch("http://localhost:3000/admin").then((respuesta) =>
    respuesta.json()
  );
};

//Crear Producto
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

//Informacion de un producto
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

//Eliminar un producto por su ID
const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "DELETE",
  });
};

//Actualizar un producto
const actualizarProducto = (
  imagen,
  nombre,
  precio,
  categoria,
  descripcion,
  id
) => {
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
  admin,
  detallesProducto,
  crearProducto,
  eliminarProducto,
  actualizarProducto,
};
