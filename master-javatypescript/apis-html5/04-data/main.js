let lista = document.querySelectorAll("#lista li")

lista.forEach(elemento => {
    let cont = elemento.dataset.continente;
    elemento.innerHTML += " | " + cont;

    if (cont === "europa") {
        elemento.style.backgroundColor = "pink";
        elemento.style.color = "black";
    }
})