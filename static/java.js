var primeimg = document.getElementById("primeimg")
var button = document.getElementById("btn-1")

button.addEventListener("click", function(){

    var primeimg = document.getElementById("primeimg")
    if(primeimg.style.display === "block"){
        primeimg.style.display = "block"
    }else{
        primeimg.style.display = "block"
        seguimg.style.display = "none"
        tercimg.style.display = "none"
        quarimg.style.display = "none"
        quintimg.style.display = "none"
    }
});

var seguimg = document.getElementById("seguimg")
var button = document.getElementById("btn-2")

button.addEventListener("click", function(){

    var seguimg = document.getElementById("seguimg")
    if(seguimg.style.display === "block"){
        seguimg.style.display = "block"
    }else{
        seguimg.style.display = "block"
        primeimg.style.display = "none"
        tercimg.style.display = "none"
        quarimg.style.display = "none"
        quintimg.style.display = "none"
    }
});

var tercimg = document.getElementById("tercimg")
var button = document.getElementById("btn-3")

button.addEventListener("click", function(){

    var tercimg = document.getElementById("tercimg")
    if(tercimg.style.display === "block"){
        tercimg.style.display = "block"
    }else{
        tercimg.style.display = "block"
        primeimg.style.display = "none"
        seguimg.style.display = "none"
        quarimg.style.display = "none"
        quintimg.style.display = "none"
    }
});

var quarimg = document.getElementById("quarimg")
var button = document.getElementById("btn-4")

button.addEventListener("click", function(){

    var quarimg = document.getElementById("quarimg")
    if(quarimg.style.display === "block"){
        quarimg.style.display = "block"
    }else{
        quarimg.style.display = "block"
        primeimg.style.display = "none"
        seguimg.style.display = "none"
        tercimg.style.display = "none"
        quintimg.style.display = "none"
    }
});

var quintimg = document.getElementById("quintimg")
var button = document.getElementById("btn-5")

button.addEventListener("click", function(){

    var quintimg = document.getElementById("quintimg")
    if(quintimg.style.display === "block"){
        quintimg.style.display = "block"
    }else{
        quintimg.style.display = "block"
        primeimg.style.display = "none"
        seguimg.style.display = "none"
        tercimg.style.display = "none"
        quarimg.style.display = "none"
    }
});
