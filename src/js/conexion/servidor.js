const listaProductos = () => {
  return fetch("http://localhost:3000/productos").then((respuesta) =>
    respuesta.json()
  );
};

export const productosServicios = {
  listaProductos,
};
