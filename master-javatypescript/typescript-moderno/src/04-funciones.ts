// Uso normal
function saludo(nombre:string):string {
    return "Un saludo para " + nombre;
};

console.log(saludo("Victor Robles"))

// Nada / void
function mostrarFecha():void {
    console.log("20-07-2023");
}

mostrarFecha();

// Never / fin de la aplicación
function finApp():never {
    throw new Error("La aplicación se ha cerrado...");
}

// finApp();

// Parámetros en funciones
function mostrarPais(pais?:string, continente?:string):string {
    let resultado: string = "Faltan datos";

    if (pais && continente) {
        resultado = pais + " " + continente;
    }

    return resultado;
} 

console.log(mostrarPais("Italia"));

// Tipo función
let grupos: (datos:string[]) => string;

grupos = function(datos:string[]) {
    return "Mis grupos favoritos son: " + datos.toString();
}

console.log(grupos(["Natos y waor", "La fuga", "Metallica"]));

// Tipo literal
// atuendo: "especial" | 1 | 2 | 3 | 4

// Tipo personalizado o alias
type traje = "especial" | 1 | 2 | 3 | 4 | "comprado"

function tekken(personaje:string, atuendo: traje):string {
    return `El personaje es ${personaje} y lleva el atuendo ${atuendo}`;
}

console.log(tekken("Tigre", "comprado"));



