const galeriaProductos = document.querySelector("[data-productos]");
const producto = document.createElement("li");
producto.classList.add("producto");
const crearProducto = `
<div class="imagen-producto">
  <img
    src="../../src/images/star-wars/uno.jpg"
    alt="imagen de producto"
  />
</div>
<div class="info-producto">
  <h4 class="nombre-producto">Posillo soldado clon</h4>
  <p class="precio-producto">60.00</p>
  <a id="aproducto" href="#"></a>
</div>
`;

galeriaProductos.appendChild(producto);
producto.innerHTML = crearProducto;