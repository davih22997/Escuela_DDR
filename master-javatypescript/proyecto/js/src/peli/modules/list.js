export default class List {
    constructor() {
        // Seleccionar elementos del dom a usar
        this.content = document.querySelector("#content");
    }

    peliTemplate(peli) {
        return `<article class="peli-item" id="peli-${peli.id}">
                <h3 class="title">${peli.title}</h3>
                <p class="description">${peli.description}</p>

                <button class="edit" data-id="${peli.id}">Editar</button>
                <button class="delete" data-id="${peli.id}">Borrar</button>
            </article>
        `;
    }

    show(pelis) {
        // Vaciar dom del contenedor de películas
        this.content.innerHTML = "";

        // Recorrer y mostrar todos los objetos/películas del LocalStorage
        pelis.forEach(peli => {
            this.content.innerHTML += this.peliTemplate(peli);
        });


    }

}