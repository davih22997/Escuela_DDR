// Comprobar si el navegador es compatible
if (typeof (Storage) == "undefined") {
    window.location.href = "https://victorroblesweb.es";
}

// Guardar datos en el navegador
sessionStorage.setItem("nombre1", "Víctor Robles");
sessionStorage.setItem("sitioweb", "victorroblesweb.es");

// Sacar datos
alert(sessionStorage.getItem("sitioweb"));
