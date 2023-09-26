// Comprobar si está disponible
if (navigator.geolocation) {
    console.log("disponible")

    // Conseguir posición
    navigator.geolocation.getCurrentPosition((
        position) => {
            let latitud = position.coords.latitude;
            let longitud = position.coords.longitude;

            console.log(position);
        },
        error => {
            console.log("Hay un error en la geolocalización")
        }
    );

}

