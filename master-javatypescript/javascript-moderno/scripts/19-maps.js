const antiguos_gadgets = {
    seis: "radiocasete",
    siete: "teléfono sobremesa",
    ocho: "compact disc"
}

const gadgets = new Map(Object.entries(antiguos_gadgets));

gadgets.set(1, "PC")
    .set(2, "TV")
    .set(3, "tablet")
    .set("cuatro", "móvil")
    .set("cinco", "laptop")

console.log(gadgets);
console.log(gadgets.get(3));
console.log(gadgets.get("ocho"));

console.log(gadgets.has(2))
console.log(gadgets.has("cinco"))
console.log(gadgets.has("laptop"))

