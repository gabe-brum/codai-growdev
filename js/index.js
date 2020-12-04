var texto1 = document.getElementById("texto1");
var texto2 = document.getElementById("texto2");

function cliqueProjetos(){
    texto2.style.display = "block";
    texto1.style.display = "none";
}

function cliqueSobre(){
    texto2.style.display = "none";
    texto1.style.display = "block";
}