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
    apagar() {
        this.arrancado = false;
    }
}
let mi_coche = new Coche("Renault", "Clio", 2001, "azul");
mi_coche.arrancar();
console.log(mi_coche);
