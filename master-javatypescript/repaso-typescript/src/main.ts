// Definir una variable en typescript
let texto:string = "VÍCTOR ROBLES WEB"
let numero:number = 12;
let verdadero:boolean = true;
let cualquier:any = "puedo meter lo que sea";

verdadero = false;

// Constantes
const nombre:string = "Víctor Robles";

console.log(texto, numero, verdadero);

// Array
let personas:string[] = ["Víctor", "Paco", "Pepe", "Juan"]


let div_personas:HTMLElement | null = document.querySelector("#personas");
div_personas.innerHTML = "<ul>" + 
            personas.map((persona) => {
                return `<li>${persona}</li>`;
            }).join("")
        + "</ul>";
