function mostrarMensaje() {
    console.log("Proyectando la película...");
}


function proyectar(metadatos:any){
// function proyectar(activar:boolean):any{
    // console.log("Proyectando la película");

    return (constructor:Function) => {
        constructor.prototype.hacerProyeccion = function():void {
            if(metadatos.activar){
                console.log("Proyecto la película:", this.titulo);
            } else {
                console.log("Cine cerrado");
            }
        }

        constructor.prototype.agregarASeleccion = function():string[] {
            let peliculas = metadatos.seleccion;
            peliculas.push(this.titulo);

            return peliculas;
        }

    }
}

@proyectar({
    activar:true,
    seleccion: ["Superman", "Gran Torino", "Spiderman 3"]
})
// @proyectar(true)
class Pelicula {
    constructor(
        public titulo:string,
        public genero:string,
        public proyectando:boolean
    ) {}
}

let batman:any = new Pelicula("Batman Begins", "Acción", false);
batman.hacerProyeccion();
console.log(batman.agregarASeleccion());

