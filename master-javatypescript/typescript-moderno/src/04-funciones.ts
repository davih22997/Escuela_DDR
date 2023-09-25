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