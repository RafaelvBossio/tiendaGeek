const inputFile = document.getElementById("imagen-file").onclick = function(){return false;};
const inputFileContenido = document.querySelector("#imagen-file");
const lb_inputFile = document.querySelector("#lb-inputFile");

inputFileContenido.addEventListener("change",()=>{
    if(inputFileContenido.value != ""){
        lb_inputFile.textContent = inputFileContenido.webkitEntries[0].name;
    }
});
