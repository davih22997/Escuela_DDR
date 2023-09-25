function modmen(mostrar:boolean) {
    return function info(target:Object, propertyKey:string, descriptor:any) {
        if (mostrar) {
            console.log(target);
            console.log(propertyKey);
            console.log(descriptor);
        }else {
            descriptor.value = function() {
                console.log("método bloqueado!!");
            }
        }
    }
}

function mi_propiedad(target:Object, propertyKey: string, parameterIndex:number) {
    console.log("Esta propiedad está en la clase " + 
    target.constructor.name + 
    " y la propiedad se llama " +
    propertyKey + 
    ". Y la posición del parámetro es " +
    parameterIndex);
}


class Ordenador {
    marca:string = "Asus"

    @modmen(false)
    encender(@mi_propiedad mensaje:string) {
        console.log("Encendiendo...");
        console.log(mensaje);
    }
}


let pc = new Ordenador();
pc.encender("Iniciando sesión en el PC de Víctor");