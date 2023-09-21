let nombre = "Víctor";

function mostrarNombre() {


    let apellidos = "Robles";
    function mostrarApellidos() {
        
        let profesion = "Desarrollador web";
        function mostrarProfesion() {
            return nombre + " " + apellidos + " " + profesion;
        }

        return mostrarProfesion;
    }

    return mostrarApellidos;
}


console.log(mostrarNombre()()());