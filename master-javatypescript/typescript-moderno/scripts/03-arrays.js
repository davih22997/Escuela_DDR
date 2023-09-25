"use strict";
// Array
let personas = ["Victor", "Paco", "Fran"];
personas.push("david");
let years = new Array(2000, 2001, 2002);
years.push(2025);
console.log(personas, years);
// Tuplas
let pelicula = ["Batman Begins", true, 1990];
console.log(pelicula.length);
// Enum - enumeración
var DatosPersonales;
(function (DatosPersonales) {
    DatosPersonales["nombre"] = "Victor";
    DatosPersonales[DatosPersonales["dni"] = 771987] = "dni";
    DatosPersonales["direccion"] = "Calle de la fantasia";
    DatosPersonales["ciudad"] = "Zaragoza";
})(DatosPersonales || (DatosPersonales = {}));
console.log(typeof (DatosPersonales));
console.log(DatosPersonales.nombre, DatosPersonales.dni);
// Cast o convertir a otro tipo
let valor_desconocido = "esto viene en una petición ajax";
let frase_final = valor_desconocido;
console.log(frase_final);
