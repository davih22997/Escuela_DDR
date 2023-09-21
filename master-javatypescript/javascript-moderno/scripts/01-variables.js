// EcmaScript 2021 / ES12 / ES.NEXT

// Variables: var, let, const
// Contenedor de información, caja para guardar un dato

// VAR: ámbito global o funcional
var nombre = "Víctor Robles WEB";

function mostrarNombre() {
    var nombre = 'Pepito';
    var apellidos = 'Robles'
    console.log("Dentro:", nombre);
    console.log("Dentro:", apellidos);
}

mostrarNombre();
console.log("Fuera:", nombre);

// LET: ámbito de bloque
let pais = "España"

console.log(pais);

function mostrarPais() {
    console.log(pais);
}

// mostrarPais();

if(pais == "España") {
    let continente = "Europa";
    console.log(continente);
}

// No accesible desde fuera del bloque
// console.log('fuera', continente);

for (let contador = 0; contador <= 5; contador++) {
    console.log(contador);
}

// No funciona con let (si no pones nada o pones var, sí)
// console.log("CONTADOR:", contador);

// CONST: Crear constantes o variables que su contenido
// no es variable

const edad = 18;
console.log(edad);

// No se puede cambiar
// edad = 12;
console.log(edad);

const ciudad = "Madrid";
const fechaNacimiento = 1978;

console.log(ciudad, fechaNacimiento);
