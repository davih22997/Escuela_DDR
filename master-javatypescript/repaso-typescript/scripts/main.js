// Definir una variable en typescript
let texto = "VÍCTOR ROBLES WEB";
let numero = 12;
let verdadero = true;
let cualquier = "puedo meter lo que sea";
verdadero = false;
// Constantes
const nombre = "Víctor Robles";
console.log(texto, numero, verdadero);
// Array
let personas = ["Víctor", "Paco", "Pepe", "Juan"];
let div_personas = document.querySelector("#personas");
div_personas.innerHTML = "<ul>" +
    personas.map((persona) => {
        return `<li>${persona}</li>`;
    }).join("")
    + "</ul>";
