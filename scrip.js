
let botonaranja = document.getElementById("naranja");
let botonnegro = document.getElementById("negro");
let botonamarillo = document.getElementById("amarillo");

botonaranja.addEventListener("click", function() {
    document.body.style.backgroundColor = "rgb(243, 189, 13)";
});

botonnegro.addEventListener("click", function() {
    document.body.style.backgroundColor = "rgb(5, 19, 22)";
});

botonamarillo.addEventListener("click", function() {
    document.body.style.backgroundColor = "rgb(253, 239, 46)";
});
