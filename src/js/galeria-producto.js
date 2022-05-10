const btnStarWars = document.querySelector("#starWar");
const btnConsolas = document.querySelector("#consola");
const btnDiversos = document.querySelector("#diverso");
const starwar = document.querySelector("#star-wars");
const consola = document.querySelector("#consolas");
const diverso = document.querySelector("#diversos");

function verMas(boton, contenedor){
    boton.addEventListener("click", ()=>{
        contenedor.classList.toggle("height");
    });
}

verMas(btnStarWars, starwar);
verMas(btnConsolas, consola);
verMas(btnDiversos, diverso);