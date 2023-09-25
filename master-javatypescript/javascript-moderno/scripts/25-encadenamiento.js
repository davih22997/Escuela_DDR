let persona = {
    nombre: "victor",
    apellidos: "robles",
    domicilio: {
        pais: "España", 
        ciudad: {
            nombre: "Madrid", 
            provincia: "Madrid"
        }
    }
};

comprobar_provincia = persona?.domicilio?.ciudad?.provincia == undefined ? false : true;
console.log(comprobar_provincia);

