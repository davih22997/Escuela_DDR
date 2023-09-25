// Notificaciones

// Comprobar compatibilidad
if (Notification == "undefined") {
    console.log("Tu navegador no es compatible con notificaciones");
} else {
    console.log("Eres compatible", Notification);
    // Pedir permiso
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    } 
    console.log (Notification.permission);

    // Crear notificación

    let principal = "Título de la notificación";
    let opciones = {
        body: "Cuerpo de la notificación, explicación, etc.",
        icon: "https://th.bing.com/th/id/OIP.k2QN0_YOnxX2O-HPdYCUDwHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
    };

    const notificacion = new Notification(principal, opciones);

    notificacion.onclick = (event) => {
        event.preventDefault();
        window.open("https://victorroblesweb.es");
        // window.location.href = "https://victorroblesweb.es";
    };

    notificacion.onclose = () => {
        alert("Ups, qué pena!! Tenía un regalo para ti!");
    }


    // Tiempo expiración
    setTimeout(() => {
        notificacion.close()
    }, 5000);
}