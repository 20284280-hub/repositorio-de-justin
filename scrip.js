let botonrojo = document.getElementById("rojo");
let botonverde = document.getElementById("verde");
let botonazul = document.getElementById("azul");

botonrojo.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightcoral";
});

botonverde.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightgreen";
});
botonazul.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});
