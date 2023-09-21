window.addEventListener("DOMContentLoaded", event => {
    console.log(event)
    let caja = document.querySelector("#contenedor");
    caja.innerHTML = "Cargando...";

    // Petición ajax moderna
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(datos => {
            console.log(datos[82].title);
            mostrar(caja, datos);
        })
        .catch(error => console.log(error.message));
        ;


    // DOM
    function mostrar(vontenedor, elementos) {
        let contenedor = document.querySelector("#contenedor");

        elementos.forEach(element => {
            let muestrame = `
                <article>
                    <h2>${element.title}</h2>
                    <p>${element.body}</p>
                </article>
                <hr/>
            `;

            contenedor.innerHTML += muestrame;

        });


        return elementos;
    }
    });

