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
