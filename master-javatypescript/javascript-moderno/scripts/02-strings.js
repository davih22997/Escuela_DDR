// Strings clásicos
let nombre = "Víctor";
let apellidos = "Robles";
let profesion = "Desarrollador web";
let nya = nombre + " " + apellidos + "\n" + profesion;

// Template Strings
let plantilla = `${nombre} ${apellidos}
${profesion}
`;

console.log(nya);
console.log(plantilla);

function ficha (nombre, apellidos, profesion) {
    let fichaTecnica = `
        <div class="ficha">
            <h2>${nombre} ${apellidos}</h2>
            <h3>${profesion}</h3>
            <p>Forma parte del equipo de victorroblesweb.es</p>
        </div>
    `;

    return fichaTecnica;
}

let cajaFichas = document.createElement("section");
cajaFichas.innerHTML = ficha("Víctor", "Robles", "Desarrollador web");
cajaFichas.innerHTML += ficha("Pepito", "Pérez", "Agricultor");

document.addEventListener('DOMContentLoaded', function(){
    // document.body.appendChild(cajaFichas);
    document.querySelector("#contenedor").appendChild(cajaFichas);
}, false);