// Parámetros por defecto
function saludo(persona = "Víctor Robles", year=2022) {

    console.log("Hola, te mando un saludo, " + persona + " estamos a " + year); 
}

saludo("Pepe", 2023);

// Funciones flecha
let saludo2 = function(nombre) {
    return "Hola, te mando un saludo, " + nombre;
}

console.log(saludo2("Víctor"));

let saludo3 = nombre => "Hola, te mando un saludo, " + nombre;

console.log(saludo3("Juan"));

let saludo4 = (nombre, pais) => "Hola, te mando un saludo, " + nombre + " de " + pais;
console.log(saludo4("David", "España"));

let saludo5 = (nombre, pais) => {
    let continente = pais == "España"? "Europa" : "Asia";


    return "Hola, te mando un saludo, " + nombre + " de " + pais + " y el continente es " + continente;
};

console.log(saludo5("Pepe", "España"));

// Resumen
function multiplicacion(n1, n2) {
    console.log(n1 * n2);
}

multiplicacion(2, 3);

let multiplicacion2 = (n1, n2) => console.log(n1 * n2);
multiplicacion2(2, 3);

// JSON
let tienda = {
    nombre: "GAME",
    videojuegos: ["GTA", "WWE", "FIFA"],
    mostrar: function() {
        console.log(this.nombre);
    },
    mostrar2 () {
        this.videojuegos.forEach((juego) => {
            if (juego === "GTA") {
                console.log("El mejor juego de la historia");
            } else {
                console.log(juego)
            }
        });
    },
    mostrar3: () => {
        console.log(tienda.nombre);
    }
}

tienda.mostrar();
tienda.mostrar2();
tienda.mostrar3();
