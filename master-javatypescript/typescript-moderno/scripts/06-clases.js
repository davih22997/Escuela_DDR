"use strict";
class Coche {
    constructor(marca = "Renault", modelo = "Clio", year = 2000, color = "rojo") {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
        this.arrancado = false;
        this.velocidad = 0;
        this.prueba = "victorroblesweb.es";
    }
    arrancar() {
        console.log("Clase padre");
        this.arrancado = true;
    }
    acelerar() {
        this.velocidad += 5;
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
    static saludar() {
        return "Hola qué tal";
    }
}
class Camioneta extends Coche {
    constructor(marca = "Renault", modelo = "Clio", year = 2000, color = "rojo") {
        super(marca, modelo, year, color);
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
    }
    arrancar() {
        console.log("Clase hija");
        this.velocidad = 200;
        this.arrancado = true;
        console.log(this);
    }
    mostrar() {
        super.arrancar();
        return this.arrancado;
    }
}
let miCamioneta = new Camioneta("Jeep", "Nose", 1990, "negro");
console.log(miCamioneta.mostrarTodo());
console.log(miCamioneta);
/*
let mi_coche:Coche = new Coche("Renault", "Clio", 2001, "azul");
mi_coche.arrancar();
mi_coche.acelerar();
mi_coche.darColor = "naranja";
mi_coche.darColor;

console.log(mi_coche.marca, mi_coche.modelo);
console.log(mi_coche);
console.log(Coche.saludar());
*/ 
