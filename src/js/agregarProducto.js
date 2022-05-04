const inputFile = document.getElementById("imagen-uno").onclick = function(){return false;};
const inputFileContenido = document.querySelector("#imagen-uno");
const lb_inputFile = document.querySelector("#lb-inputFile");

inputFileContenido.addEventListener("change",()=>{
    if(inputFileContenido.value != ""){
        lb_inputFile.textContent = inputFileContenido.webkitEntries[0].name;
    }
});
