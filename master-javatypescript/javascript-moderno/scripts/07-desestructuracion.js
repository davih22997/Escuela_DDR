let frutas = ["manzana", "pera", "naranja", "sandia"];

// Clásico
// let manzana = frutas[0];
// let pera = frutas[1];

// Desestructurar array
let [manzana, pera, naranja, sandia] = frutas;

console.log(naranja);
console.log(manzana);

// Desestructurar objetos
let persona = {
    nombre: "Víctor",
    edad: 80,
    altura: 190,
    pais: "España"
}

// let {nombre, edad, pais} = persona;

// Desestructurar string
let usuario = "Víctor Robles WEB 999999999G 09/09/1940 Madrid";
let [nombre, apellido1, apellido2, dni, fecha, ciudad] = usuario.split(" ");

// Crear varias variables
let lenguaje = "JS", 
framework = "Angular", 
editor = "VSC";

// Utilidad parámetros funciones
function mostrarUsuario({nombre, apellido = "", ciudad = "Barcelona"}) {
    console.log(nombre, apellido, ciudad)
} 

mostrarUsuario({nombre: "Víctor", ciudad:"Valencia"});
