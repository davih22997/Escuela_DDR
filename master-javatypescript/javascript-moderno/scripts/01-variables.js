// EcmaScript 2021 / ES12 / ES.NEXT

// Variables: var, let, const
// Contenedor de información, caja para guardar un dato

// VAR: ámbito global o funcional
var nombre = "Víctor Robles WEB";

function mostrarNombre() {
    var nombre = 'Pepito';
    var apellidos = 'Robles'
    console.log("Dentro:", nombre);
    console.log("Dentro:", apellidos);
}

mostrarNombre();
console.log("Fuera:", nombre);