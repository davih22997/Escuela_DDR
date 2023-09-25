// Array
let personas:string[] = ["Victor", "Paco", "Fran"]

personas.push("david");

let years:number[] = new Array(2000, 2001, 2002);
years.push(2025);

console.log(personas, years)

// Tuplas
let pelicula:[string, boolean, number] = ["Batman Begins", true, 1990]

console.log(pelicula.length)

// Enum - enumeración
enum DatosPersonales {
    nombre = "Victor",
    dni = 771987,
    direccion = "Calle de la fantasia",
    ciudad = "Zaragoza"
}

console.log(typeof(DatosPersonales));
console.log(DatosPersonales.nombre, DatosPersonales.dni);
