const aProducto = document.querySelectorAll("#aproducto");
const aTodo = document.querySelectorAll("#atodo");

aProducto.forEach(Element =>{
    Element.textContent = "ver producto";
});

aTodo.forEach(Element =>{
    Element.textContent = "ver todo";
});