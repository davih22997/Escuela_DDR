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




class Ordenador {
    @modmen(false)
    encender(mensaje:string) {
        console.log("Encendiendo...");
        console.log(mensaje);
    }
}


let pc = new Ordenador();
pc.encender("Iniciando sesión en el PC de Víctor");