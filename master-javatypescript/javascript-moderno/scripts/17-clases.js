// Molde
class Coche{
    
    // Método que se ejecuta primero
    constructor( {
        marca = "Mercedes", 
        modelo = "Clase A", 
        color = "Negro", 
        velocidad = 0, 
        year = 2022
    }) {
        // Propiedades o atributos
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidad = velocidad;
        this.year = year;
    }
    
    // Métodos / acciones o funcionalidades del objeto

}

// Crear objeto
let mi_coche = new Coche({});
console.log(mi_coche.marca, mi_coche.modelo, mi_coche.year);

let segundo_coche = new Coche({ modelo: "Clio",marca: "Renault", year: 2013});
console.log(segundo_coche.marca, segundo_coche.modelo, segundo_coche.year);

