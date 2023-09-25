"use strict";
// Uso normal
function saludo(nombre) {
    return "Un saludo para " + nombre;
}
;
console.log(saludo("Victor Robles"));
// Nada / void
function mostrarFecha() {
    console.log("20-07-2023");
}
mostrarFecha();
// Never / fin de la aplicación
function finApp() {
    throw new Error("La aplicación se ha cerrado...");
}
// finApp();
// Parámetros en funciones
function mostrarPais(pais, continente) {
    let resultado = "Faltan datos";
    if (pais && continente) {
        resultado = pais + " " + continente;
    }
    return resultado;
}
console.log(mostrarPais("Italia"));
// Tipo función
let grupos;
grupos = function (datos) {
    return "Mis grupos favoritos son: " + datos.toString();
};
console.log(grupos(["Natos y waor", "La fuga", "Metallica"]));
function tekken(personaje, atuendo) {
    return `El personaje es ${personaje} y lleva el atuendo ${atuendo}`;
}
console.log(tekken("Tigre", "comprado"));
