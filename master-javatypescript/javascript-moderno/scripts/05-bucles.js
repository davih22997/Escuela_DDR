let nombres = [
    "Víctor",
    "Paco",
    "Pepe",
    "Juan"
];

// Bucle clásico
for (let i = 0; i < nombres.length; i++) {
    //console.log(nombres[i]);
}

// For of -> Accede al contenido
for(let nombre of nombres) {
    console.log(nombre);
}

// For in -> Accede al índice
//          -> también recorre json
for(let indice in nombres) {
    console.log(indice, nombres[indice]);
}

// For Each
/*
nombres.forEach(function(nombre_actual, indice, arreglo) {
    console.log(indice, nombre_actual, arreglo);
});
*/
nombres.forEach((nombre_actual, indice, arreglo) => console.log(indice, nombre_actual, arreglo));

