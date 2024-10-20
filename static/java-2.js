var primsobre = document.getElementById("primsobre")
var button = document.getElementById("primeirosobre")

button.addEventListener("click", function(){
 
    var primsobre = document.getElementById("primsobre")
    if(primsobre.style.display === "block"){
        primsobre.style.display = "block"
    }else{
        primsobre.style.display = "block"
        segsobre.style.display = "none"
        tercsobre.style.display = "none"
        quarsobre.style.display = "none"
    }
});

var segsobre = document.getElementById("segsobre")
var button = document.getElementById("segundosobre")

button.addEventListener("click", function(){
 
    var segsobre = document.getElementById("segsobre")
    if(segsobre.style.display === "block"){
        segsobre.style.display = "block"
    }else{
        segsobre.style.display = "block"
        primsobre.style.display = "none"
        tercsobre.style.display = "none"
        quarsobre.style.display = "none"
    }
});

var tercsobre = document.getElementById("tercsobre")
var button = document.getElementById("terceirosobre")

button.addEventListener("click", function(){
 
    var tercsobre = document.getElementById("tercsobre")
    if(tercsobre.style.display === "block"){
        tercsobre.style.display = "block"
    }else{
        tercsobre.style.display = "block"
        primsobre.style.display = "none"
        segsobre.style.display = "none"
        quarsobre.style.display = "none"
    }
});

var quarsobre = document.getElementById("quarsobre")
var button = document.getElementById("quartosobre")

button.addEventListener("click", function(){
 
    var quarsobre = document.getElementById("quarsobre")
    if(quarsobre.style.display === "block"){
        quarsobre.style.display = "block"
    }else{
        quarsobre.style.display = "block"
        primsobre.style.display = "none"
        segsobre.style.display = "none"
        tercsobre.style.display = "none"  
    }
});