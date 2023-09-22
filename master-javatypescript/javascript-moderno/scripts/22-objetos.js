let titulo = "El Señor de los Anillos";
let genero = "Acción";
let duracion = "2 horas";

const pelicula = {
    titulo,
    genero,
    duracion,
    [genero+"2022"]: "hola",
    mostrar() {
        return this.titulo + " " + this.genero;
    }
};

console.log(Object.values(pelicula));
Object.entries(pelicula).forEach((clave, valor) => console.log(clave, valor));