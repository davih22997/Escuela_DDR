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
        setTimeout(() => {
            resolve(productos);
        }, 500);
    });

}

conseguirProductos().then(items =>console.log(items));



