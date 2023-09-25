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
   // public: accesible desde cualquier parte
   // protected: desde dentro de la clase y clases hijas
   // privadas: solo desde dentro de esta clase
    public prueba: string;

    protected arrancado:boolean;
    protected velocidad:number;

    constructor(
        public marca:string="Renault", 
        public modelo:string="Clio", 
        public year:number=2000, 
        public color:string= "rojo",
    )
    {
        this.arrancado = false;
        this.velocidad = 0;
        this.prueba = "victorroblesweb.es";
    }

    public arrancar():void {
        console.log("Clase padre")
        this.arrancado = true;
    }

    public acelerar():void {
        this.velocidad += 5;
    }

    public apagar():void {
        this.arrancado = false;
    }

    private mostrarCoche():string {
        return this.marca + " " + this.modelo;
    }

    private mostrarCualidades():string {
        return this.year + " " + this.color;
    }

    public mostrarTodo():string {
        return this.mostrarCoche() + " " + this.mostrarCualidades();
    }

    public set darColor(color:string) {
        this.color = color;
    }

    public get getColor():string {
        return this.color;
    }

    static saludar():string {
        return "Hola qué tal";
    }

}

class Camioneta extends Coche {
    constructor(
        public marca:string="Renault", 
        public modelo:string="Clio", 
        public year:number=2000, 
        public color:string= "rojo",
    ) {
        super(marca, modelo, year, color);
    }

    public arrancar():void {
        console.log("Clase hija");
        this.velocidad = 200;
        this.arrancado = true;
        console.log(this);
    }


    public mostrar() {
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