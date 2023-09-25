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

