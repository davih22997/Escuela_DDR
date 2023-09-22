// Seleccionar elementos con ID
// Seleccionar elementos con una CLASE

// let contenedor = document.getElementById("contenedor")
// let contenedor = document.querySelector(".container");
let contenedores = document.querySelectorAll(".container");

// contenedor.innerText = "Hola soy un texto desde JS";
// contenedor.style.border = "1px solid black";
// contenedor.style.backgroundColor = "#CCC";
// contenedor.className = "ficha";
console.log(contenedor)

// contenedores.forEach((elemento, indice) => {
for (indice in contenedores) {
    let elemento = contenedores[indice];
    elemento.innerText = `Hola soy el texto ${indice} desde JS`;
    elemento.className = "ficha";

    if (parseInt(indice) === 2) {
        elemento.style.backgroundColor = "orange";
    }

}

// });

console.log(contenedores);