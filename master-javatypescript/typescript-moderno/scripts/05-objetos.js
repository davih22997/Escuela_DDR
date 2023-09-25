"use strict";
let empresa = {
    nombre: "MICROSOFT INC.",
    sector: "Informática",
    servicios: ["Sistemas operativos", "ofimatica", "consolas"],
    facturacion: 55000000000,
    mostrar() {
        return this.nombre + " " + this.sector;
    }
};
console.log(empresa.mostrar());
