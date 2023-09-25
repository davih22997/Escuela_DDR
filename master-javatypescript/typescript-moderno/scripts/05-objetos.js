"use strict";
let empresa = {
    nombre: "MICROSOFT INC.",
    sector: "Informática",
    servicios: ["Sistemas operativos", "ofimatica", "consolas"],
    facturacion: 55000000000
};
empresa = {
    nombre: "hola",
    servicios: [],
    sector: "no",
    facturacion: 1
};
empresa.sector = "Hola";
console.log(typeof (empresa.facturacion));
