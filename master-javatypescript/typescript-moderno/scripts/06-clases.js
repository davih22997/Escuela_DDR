"use strict";
class Coche {
    constructor() {
        this.marca = "Renault";
        this.modelo = "Clio";
        this.year = 2000;
        this.color = "rojo";
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
let mi_coche = new Coche();
mi_coche.arrancar();
console.log(mi_coche.modelo, mi_coche.arrancado);
