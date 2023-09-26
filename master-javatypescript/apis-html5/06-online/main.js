let conectado = document.querySelector(".online")
let desconectado = document.querySelector(".offline")

function ocultarDivs() {
    conectado.style.display = "none";
    desconectado.style.display = "none";

    return true;
}

ocultarDivs();

alert(navigator.onLine);

if(navigator.onLine) {
    window.addEventListener('online', () => {
        conectado.style.display = "block";
        desconectado.style.display = "none";
    
        setTimeout(() => {
            ocultarDivs();
        }, 10000)
    })
    
    
    window.addEventListener('offline', () => {
        desconectado.style.display = "block";
        conectado.style.display = "none";
    
        setTimeout(() => {
            ocultarDivs();
        }, 10000)
    })
}



