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
            // reject(Error("¡Ha ocurrido un error!"));
        }, 3500);
    });

}

function productoComprado(nombre = "Ordenador Gaming") {
    return new Promise((resolve, reject) => {
        console.log("Haciendo la compra...");

        setTimeout(() => {
            resolve({
                producto: nombre,
                cliente: "Víctor Robles WEB"
            });
        }, 3000);
    });
}

function procesarVenta(venta) {
    console.log("Producto comprado:", venta);

    productos = productos.filter(producto => producto.nombre != venta.producto);
}

conseguirProductos().
    then(items => {
        console.log("Productos disponibles:", items);
        return productoComprado("Tablet");
    })
    .then(venta => {
        procesarVenta(venta);
        return productoComprado("Cámara Reflex");
    })
    .then(venta => {
        procesarVenta(venta);
        return productoComprado();
    })
    .then(venta => procesarVenta(venta))
    .catch(error => console.log(error.message))
    .finally (() => {
        if (productos.length >= 1)
            console.log("Productos que quedan disponibles:", productos);
        else
            console.log("No quedan productos disponibles")
        
        console.log("¡PROMESA FINALIZADA!");
    });



