const btnLogin = document.querySelector("#btn-login");
const logo2 = document.querySelector("#logo2");
const verConsolas = document.querySelector("#ver-consolas");

btnLogin.addEventListener("click", (e)=>{
    e.preventDefault();
    location.href = "./src/pages/login.html";
});

logo2.addEventListener("click", (e)=>{
    e.preventDefault();
    location.href = "#header";
});

verConsolas.addEventListener("click", (e)=> {
    e.preventDefault();
    location.href = "#consolas";
});