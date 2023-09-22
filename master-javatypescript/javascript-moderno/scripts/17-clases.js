// Molde
class Coche{
    
    #npuertas = 4;
    _nplazas = 5;

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

    get numeroPuertas() {
        return this.#npuertas;
    }

    get numeroPlazas() {
        return this._nplazas;
    }

    // Método estático
    static saludar(nombre) {
        return "Hola " + nombre;
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

console.log(Coche.saludar("Víctor"));

console.log(mi_coche.numeroPuertas);
console.log(mi_coche.numeroPlazas);

// Herencia
class Quad extends Coche {
    constructor({cilindrada = 3, marca, modelo, color, velocidad, year}) {
        super({marca: marca, modelo: modelo, color: color, velocidad: velocidad, year: year});
        this.cilindros = cilindrada;
    }

    saltar() {
        return "Has saltado una rampa";
    }

}

let mi_quad = new Quad({
    marca: "Suzuki", 
    modelo: "Loquesea", 
    color: "Amarillo",
    year: 2030,
    velocidad: 200
});

mi_quad.subirVelocidad();
mi_quad.subirVelocidad();
mi_quad.subirVelocidad();

console.log(mi_quad);

mi_quad.guardarMarca = "Invento";
console.log(mi_quad.devolverMarca);

console.log(mi_quad.saltar());
