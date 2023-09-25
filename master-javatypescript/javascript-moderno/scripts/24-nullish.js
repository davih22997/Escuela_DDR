// Nullish coalescing operator

function multiplicacion(numero1, numero2) {
    numero1 = numero1 ?? 1;
    numero2 = numero2 ?? 2;

    return numero1 * numero2;
}

function mostrarUsuario(id = 0, nombre = "Usuario desconocido") {
    return id + " " + nombre;
}

console.log(multiplicacion(2))
console.log(mostrarUsuario())