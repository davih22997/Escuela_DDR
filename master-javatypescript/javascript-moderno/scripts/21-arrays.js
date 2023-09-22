let personas = ["victor", "paco", "pepe", "juan", "antonio"];

// Buscar en un array - find
let busqueda = personas.find(persona => persona === "francisco");
console.log(busqueda);

// Buscar en un array - findIndex
let busqueda2 = personas.findIndex(persona => persona === "juan");
console.log(busqueda2);

// Crear array basándome en un objeto iterable
let array_letras = Array.from("victorroblesweb.es");
console.log(array_letras);

let array_numeros_cuadrado = Array.from([1, 2, 3, 4, 5, 6], numero => Math.pow(numero, 2))
console.log(array_numeros_cuadrado);

// Comprobar si existe un elemento dentro de un array - includes
console.log(personas.includes("victor robles"));

// Filtrar arrays - filter
let nuevas_personas = personas.filter(persona => persona.length >= 5);
console.log(nuevas_personas);

let nuevas_personas2 = personas.filter(persona => persona.includes("a"));
console.log(nuevas_personas2);

