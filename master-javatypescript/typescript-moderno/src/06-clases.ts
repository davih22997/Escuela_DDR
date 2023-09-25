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


    private arrancado:boolean;
    private velocidad:number;

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

    public arrancar():void {
        this.arrancado = true;
    }

    public acelerar():void {
        this.velocidad++;
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

    private mostrarTodo():string {
        return this.mostrarCoche() + " " + this.mostrarCualidades();
    }

}

let mi_coche:Coche = new Coche("Renault", "Clio", 2001, "azul");
mi_coche.arrancar();
mi_coche.acelerar();

console.log(mi_coche.marca, mi_coche.modelo);
console.log(mi_coche);
