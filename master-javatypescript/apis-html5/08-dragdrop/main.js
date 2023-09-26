const tomates = document.querySelectorAll(".tomate");
const huerto = document.querySelector("#huerto");

tomates.forEach((tomate, indice) => {

    // DRAGSTART -> Al clickar
    tomate.addEventListener("dragstart", () => {
        console.log("Has empezado a mover el tomate " + parseInt(indice+1));
    });
    
    // DRAG -> Mientras se pulsa
    tomate.addEventListener("drag", () => {
        console.log("Estas moviendo el tomate " + parseInt(indice+1));
    });

    // DRAGEND -> Al dejar de pulsar
    tomate.addEventListener("dragend", () => {
        console.log("Has dejado de mover el tomate " + parseInt(indice+1));
    });

});

// DRAGENTER -> Salta cuando un elemento entra en la zona
huerto.addEventListener("dragenter", (e) => {
    e.preventDefault();
    console.log("Tomate desplazado hacia el huerto");
});

// DRAGOVER -> Salta cuando un elemento se mueve dentro de la zona
huerto.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("Moviendo tomate dentro del huerto");
});

// DROP -> Salta cuando sueltas un elemento dentro de la zona
huerto.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("Tomate plantado en el huerto");
});

// DRAGLEAVE -> Salta cuando quitas un elemento de dentro de la zona
huerto.addEventListener("dragleave", (e) => {
    e.preventDefault();
    console.log("Tomate recogido del huerto");
});



