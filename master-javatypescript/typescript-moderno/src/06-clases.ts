class Coche {

    marca:string = "Renault";
    modelo:string = "Clio";
    year:number = 2000;
    color:string = "rojo";
    arrancado:boolean = false;
    velocidad:number = 0;

    arrancar():void {
        this.arrancado = true;
    }

    apagar():void {
        this.arrancado = false;
    }

}

let mi_coche:Coche = new Coche();
mi_coche.arrancar();

console.log(mi_coche.modelo, mi_coche.arrancado);
