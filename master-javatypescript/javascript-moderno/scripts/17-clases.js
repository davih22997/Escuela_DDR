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
    subirVelocidad() {
        this.velocidad++;
    }

    bajarVelocidad() {
        this.velocidad--;
    }

    // Métodos SET y GET (setter y getters)
    set guardarMarca(marca){
        this.marca = marca;
    }

    get devolverMarca(){
        return this.marca;
    }

}

// Crear objeto
let mi_coche = new Coche({marca:"Audi", modelo:"C4", color: "Rojo", velocidad: 100, year: 2023});
console.log(mi_coche.marca, mi_coche.modelo, mi_coche.velocidad + "km/h");

mi_coche.subirVelocidad();
mi_coche.subirVelocidad();
mi_coche.subirVelocidad();
mi_coche.subirVelocidad();
mi_coche.subirVelocidad();
mi_coche.bajarVelocidad();
console.log(mi_coche.velocidad + "km/h");
mi_coche.guardarMarca = "Toyota";

console.log(mi_coche.devolverMarca);


let segundo_coche = new Coche({modelo: "Clio", marca: "Renault", year: 2013});
console.log(segundo_coche.marca, segundo_coche.modelo, segundo_coche.year);

