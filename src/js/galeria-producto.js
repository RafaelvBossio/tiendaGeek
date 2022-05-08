const aProducto = document.querySelectorAll("#aproducto");
const aTodo = document.querySelectorAll("#atodo");

aProducto.forEach(Element =>{
    Element.textContent = "ver producto";
    Element.addEventListener("click",(e)=>{
        e.preventDefault();
        location.href = "../src/pages/producto.html";
    });
});

aTodo.forEach(Element =>{
    Element.textContent = "ver todo";
    Element.style.color = "black"
    Element.addEventListener("click",(e)=>{
        e.preventDefault();
        location.href = "../src/pages/login.html";
    });
});