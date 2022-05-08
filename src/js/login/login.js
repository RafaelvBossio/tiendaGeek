const logo = document.querySelector("#logo");
const logo2 = document.querySelector("#logo2");

logo.addEventListener("click",(e)=>{
    e.preventDefault();
    location.href = "../../../index.html";
});

logo2.addEventListener("click", (e)=>{
    e.preventDefault();
    location.href = "#header";
});