type empresas = {
    nombre:string,
    sector:string,
    servicios:string[],
    facturacion:number
    mostrar: () => string
}

let empresa:empresas = {
    nombre: "MICROSOFT INC.",
    sector: "Informática",
    servicios: ["Sistemas operativos", "ofimatica", "consolas"],
    facturacion: 55_000_000_000,
    mostrar() {
        return this.nombre+ " " + this.sector;
    }
};

console.log(empresa.mostrar());


