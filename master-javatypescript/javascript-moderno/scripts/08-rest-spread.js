// SPREAD
let heroes = ["Batman", "Spiderman", "Superman", "Venom", "Aquaman"];

// console.log(heroes[0], heroes[1], heroes[2]);
console.log(...heroes)

function mostrarHeroes(heroe1, heroe2) {
    console.log(`
        **** MIS DOS SUPERHÉROES FAVORITOS ****
            - ${heroe1}
            - ${heroe2}
        fin.
    `);
}

mostrarHeroes(...heroes);

let superheroes = ["Flash", "Catwoman", ...heroes];

console.log(superheroes);

// REST
function peliculas(pelicula1, pelicula2, ...restoDePeliculas) {
    console.log(pelicula1);
    console.log(pelicula2);
    for (pelicula of restoDePeliculas)
        console.log(pelicula)
    
}

peliculas("El Señor de los anillos", 
"Fast and furious",
"Batman VS Superman",
"Gran Torino", 
"Sin límites"
);

