// String
let nombre = "Víctor Robles"
//console.log(typeof(nombre));

// Number
let numero = 14;
let decimal = 3.2;
//console.log(typeof(numero));
//console.log(typeof(decimal));

// Boolean
let mayor_edad = true;
let menor_edad = Boolean(0); // 1 es true, 0 es false

//console.log(typeof(mayor_edad));
//console.log(typeof(menor_edad));

// Array
let paises = ['España', 'México', 'Colombia', 'Argentina'];
//console.log(typeof(paises));
//console.log(typeof(paises[1]));

// Null
let vacio;
//console.log(typeof(vacio));

// Undefined
let no_definido = undefined;
//console.log(typeof(no_definido));

// JSON - JavaScript Object Notation - Objectos literales
let pelicula = {
    titulo: "Space Jam",
    genero: "Animacion",
    anyo: 1996,
    director: "Tarantino",
    mostrar: function() {
        return `
            *** LA PELÍCULA DE LA SEMANA *** \n
            Título: ${this.titulo}
            Género: ${this.genero}
            Año: ${this.anyo}
            Director: ${this.director}
        `;
    }
};

pelicula.pais = "Estados Unidos";
delete pelicula.director;
// delete pelicula.anyo;
pelicula.genero = null;

//console.log("anyo" in pelicula);

for (let propiedad in pelicula) {
    let dato_actual = pelicula[propiedad]
    if (dato_actual !== null && typeof(dato_actual) !== "function") {
        console.log(propiedad, dato_actual);
    }
}

// Symbol
let animal = Symbol("tigre");
let animal2 = Symbol("tigre");

console.log(animal, animal2);
console.log(animal == animal2);

let user = {
    id: 1,
    nombre: "Víctor Robles",
    web: "victorroblesweb.es"
}

let id = Symbol('id');
user[id] = 7;
console.log(user.id, user[id]);



