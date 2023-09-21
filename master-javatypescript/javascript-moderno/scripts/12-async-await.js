let productos = [
    {
        nombre: "Ordenador Gaming",
        marca: "Asus",
        precio: 1200
    },
    {
        nombre: "Tablet",
        marca: "Samsung",
        precio: 300
    },
    {
        nombre: "Cámara Reflex",
        marca: "Canon",
        precio: 650
    }
];

function conseguirProductos() {

    return new Promise((resolve, reject) => {
        console.log("Cargando...");

        setTimeout(() => {
            resolve(productos);
            //reject(Error("¡Ha ocurrido un error!"));
        }, 3500);
    });

}

function conseguirNombre() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Víctor Robles WEB");
            // reject("Hay un error");
        }, 3000);
    });
}

async function getMisProductos() {
    try {
        console.log("Cargando información...");

        let informacion = await Promise.all([conseguirProductos(), conseguirNombre()])

        console.log(informacion[0], informacion[1]);
    } catch(error) {
        //console.log(error.message);
        throw error;
    }
    console.log("fuera del try")
}

getMisProductos();
