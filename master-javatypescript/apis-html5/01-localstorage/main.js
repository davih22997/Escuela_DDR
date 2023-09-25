// Comprobar si el navegador es compatible
if (typeof(Storage) == "undefined") {
    window.location.href = "https://victorroblesweb.es"
}

// Guardar datos en el navegador
localStorage.setItem("nombre1", "Víctor Robles");
localStorage.setItem("nombre2", "Paco");
localStorage.setItem("nombre3", "Fran");

// Recuperar datos del almacenamiento local
let datos = document.querySelector("#datos");
datos.innerHTML = `<p id="nombre1">Nombre 1: ${localStorage.getItem("nombre1")} <button>Borrar</button></p>`;
datos.innerHTML += `<p id="nombre2">Nombre 2: ${localStorage.getItem("nombre2")} <button>Borrar</button></p>`;
datos.innerHTML += `<p id="nombre3">Nombre 3: ${localStorage.getItem("nombre3")} <button>Borrar</button></p>`;

// Borrar datos
localStorage.removeItem("nombre");

let elementos = document.querySelectorAll("p button");

elementos.forEach(elemento => {

    elemento.addEventListener("click", (event) => {
        let padre = event.target.parentElement;
        localStorage.removeItem(padre.getAttribute("id"));
        padre.remove();
    });    

});

document.querySelector("#all").addEventListener("click", (event) => {
    event.target.remove();
    localStorage.clear();
    document.querySelector("#nombre1").remove();
    document.querySelector("#nombre2").remove();
    document.querySelector("#nombre3").remove();
});