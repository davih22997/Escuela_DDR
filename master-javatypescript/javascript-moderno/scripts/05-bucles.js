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
    // console.log(indice, nombres[indice]);
}

// For Each
/*
nombres.forEach(function(nombre_actual, indice, arreglo) {
    console.log(indice, nombre_actual, arreglo);
});
*/
// nombres.forEach((nombre_actual, indice, arreglo) => console.log(indice, nombre_actual, arreglo));

// Recorrer string
let sitioweb = "victorroblesweb.es";

for (let letra of sitioweb) {
    //console.log(letra);
}

// Iterables
const mi_iterable = nombres[Symbol.iterator]();
// console.log(typeof mi_iterable, mi_iterable);
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());

// JSON
let fruta = {
    nombre: "Manzana",
    color: "Verde",
    temporada: "Invierno"
}

fruta[Symbol.iterator] = function() {
    let indice = 0;
    let valores = Object.values(this);

    return {
        next() {
            if(indice >= valores.length) {
                return {
                    done: true,
                    value:undefined
                };
            }

            return {
                done: false,
                value: valores[indice++]
            }

        }
    };
}

for(let propiedad of fruta) {
    //console.log(propiedad);
}

for(let propiedad in fruta) {
    console.log(propiedad, fruta[propiedad]);
}

