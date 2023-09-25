let mi_objeto = {
    nombre: "Víctor",
    apellidos: "Apellidos",
    sitio: "victorroblesweb.es"
};

let objeto_string = JSON.stringify(mi_objeto);

console.log(mi_objeto);
console.log(typeof objeto_string);

localStorage.setItem("persona", objeto_string);



