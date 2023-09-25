"use strict";
class Coche {
    constructor(marca = "Renault", modelo = "Clio", year = 2000, color = "rojo") {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
        this.arrancado = false;
        this.velocidad = 0;
    }
    arrancar() {
        this.arrancado = true;
    }
    acelerar() {
        this.velocidad++;
    }
    apagar() {
        this.arrancado = false;
    }
    mostrarCoche() {
        return this.marca + " " + this.modelo;
    }
    mostrarCualidades() {
        return this.year + " " + this.color;
    }
    mostrarTodo() {
        return this.mostrarCoche() + " " + this.mostrarCualidades();
    }
    set darColor(color) {
        this.color = color;
    }
    get getColor() {
        return this.color;
    }
}
let mi_coche = new Coche("Renault", "Clio", 2001, "azul");
mi_coche.arrancar();
mi_coche.acelerar();
mi_coche.darColor = "naranja";
mi_coche.darColor;
console.log(mi_coche.marca, mi_coche.modelo);
console.log(mi_coche);
