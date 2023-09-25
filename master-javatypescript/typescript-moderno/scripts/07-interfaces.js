"use strict";
;
// Clase
class Fifa {
    constructor(titulo, categoria, edad, duracion, lanzado) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.edad = edad;
        this.duracion = duracion;
        this.lanzado = lanzado;
    }
    mostrar() {
        console.log(this.titulo, this.categoria, this.edad);
    }
    actualizar(consola) {
        console.log("Buscando actualizaciones...");
        return "Actualizado";
    }
}
let fifa23 = new Fifa("fifa 23", "Fútbol", 5, 25, true);
fifa23.mostrar();
// Interfaz objeto literal
let gta = {
    titulo: "GTA 5",
    categoria: "Acción",
    edad: 18,
    mostrar() {
        console.log(this.titulo, this.categoria, this.edad);
    },
    actualizar(consola) {
        console.log("Buscando actualizaciones...");
        return "Actualizado";
    }
};
console.log(gta);
