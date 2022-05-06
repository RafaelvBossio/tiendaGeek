const aProducto = document.querySelectorAll("#aproducto");
const aTodo = document.querySelectorAll("#atodo");
const logo = document.querySelector("#logo");
const logo2 = document.querySelector("#logo2");
const login = document.querySelector("#login");

logo.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "../../index.html";
});

logo2.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "#header";
});

login.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "../pages/login.html";
});

aProducto.forEach((Element) => {
  Element.textContent = "ver producto";
  Element.addEventListener("click", (e) => {
    location.href = "../pages/producto.html";
  });
});

aTodo.forEach((Element) => {
  Element.textContent = "ver todo";
  this.addEventListener("click", () => {
    location.href = "../pages/productos.html";
  });
});