// Tipos de dato básicos
let texto:string = "Hola que tal!!";

let numero:number = 10;
numero = 12.4;
numero = 11.1;

let verdadero:boolean = true;
verdadero = false;

let normal:any = "cualquier cosa";
normal = true;
normal = 14;

let persona:string = "Victor Robles";
persona = "Antonio";
// persona = null;

let cualquiera:unknown = "Soy un texto";
cualquiera = 1;
cualquiera = true;

if (typeof cualquiera === "number") {
    let mi_numero:number = cualquiera;
}

console.log(normal);

