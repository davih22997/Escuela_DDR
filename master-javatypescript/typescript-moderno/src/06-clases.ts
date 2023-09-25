class Coche {

    /*
    marca:string;
    modelo:string;
    year:number;
    color:string;
    arrancado:boolean;
    velocidad:number;

    constructor(
        marca:string="Renault", 
        modelo:string="Clio", 
        year:number=2000, 
        color:string= "rojo",
        arrancado:boolean = false,
        velocidad:number = 0
    ) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
        this.arrancado = arrancado;
        this.velocidad = velocidad;
    }
    */


    arrancado:boolean;
    velocidad:number;

    constructor(
        public marca:string="Renault", 
        public modelo:string="Clio", 
        public year:number=2000, 
        public color:string= "rojo",
    )
    {
        this.arrancado = false;
        this.velocidad = 0;
    }

    arrancar():void {
        this.arrancado = true;
    }

    apagar():void {
        this.arrancado = false;
    }

}

let mi_coche:Coche = new Coche("Renault", "Clio", 2001, "azul");
mi_coche.arrancar();

console.log(mi_coche);
