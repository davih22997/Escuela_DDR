"use strict";
// Uso normal
function saludo(nombre) {
    return "Un saludo para " + nombre;
}
;
console.log(saludo("Victor Robles"));
finApp();
// Nada / void
function mostrarFecha() {
    console.log("20-07-2023");
}
mostrarFecha();
// Never / fin de la aplicación
function finApp() {
    throw new Error("La aplicación se ha cerrado...");
}
