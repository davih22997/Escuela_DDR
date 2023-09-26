// const tomates = document.querySelectorAll(".tomate");
const hortalizas = document.querySelectorAll("#cesta > div");
const huerto = document.querySelector("#huerto");

hortalizas.forEach((hortaliza, indice) => {
    // Asignar id a elementos
    hortaliza.setAttribute("id", "hortaliza" + indice);

    // DRAGSTART -> Al clickar
    hortaliza.addEventListener("dragstart", (e) => {
        // console.log("Has empezado a mover el tomate " + parseInt(indice+1));

        // Compartir info del elemento que muevo
        e.dataTransfer.setData("text", e.target.id);
    });
    
    // DRAG -> Mientras se pulsa
    hortaliza.addEventListener("drag", () => {
        // console.log("Estas moviendo el tomate " + parseInt(indice+1));
    });

    // DRAGEND -> Al dejar de pulsar
    hortaliza.addEventListener("dragend", () => {
        // console.log("Has dejado de mover el tomate " + parseInt(indice+1));
    });

});

// DRAGENTER -> Salta cuando un elemento entra en la zona
huerto.addEventListener("dragenter", (e) => {
    e.preventDefault();
    // console.log("Tomate desplazado hacia el huerto");
});

// DRAGOVER -> Salta cuando un elemento se mueve dentro de la zona
huerto.addEventListener("dragover", (e) => {
    e.preventDefault();
    // console.log("Moviendo tomate dentro del huerto");
});

// DROP -> Salta cuando sueltas un elemento dentro de la zona
huerto.addEventListener("drop", (e) => {
    e.preventDefault();
    // console.log("Tomate plantado en el huerto");

    // Recibir la info y soltar el elemento en la zona
    let hortaliza = e.dataTransfer.getData("text");
    e.target.appendChild(document.querySelector("#" + hortaliza));

    console.log("Has plantado el hortaliza: " + hortaliza)
});

// DRAGLEAVE -> Salta cuando quitas un elemento de dentro de la zona
huerto.addEventListener("dragleave", (e) => {
    e.preventDefault();
    // console.log("Tomate recogido del huerto");
});



