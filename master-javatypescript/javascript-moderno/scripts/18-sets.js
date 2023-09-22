// Crear set
let gadgets = new Set(["movil", "tablet", "portatil"]);

// Agregar elementos al set
gadgets.add(12);
gadgets.add("maquina de afeitar");
gadgets.add(["hola", "hola"]);
gadgets.add("chromecast");
gadgets.add("tv");
gadgets.add("tv");
gadgets.add("tv");

console.log(gadgets);

// Sacar el tamaño del set
console.log("Size:", gadgets.size)

// Eliminarlos
gadgets.delete("tv");
gadgets.delete("maquina de afeitar")

// Comprobar existencia
console.log(gadgets.has("tv"), gadgets.has("chromecast"));

// Recorrer el set
for (let item of gadgets) 
    console.log(item);

gadgets.forEach(item => console.log(item))

gadgets.clear();
console.log(gadgets);




