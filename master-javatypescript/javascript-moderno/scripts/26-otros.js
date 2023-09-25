// Separadores numéricos
let numero = 4_000_000_000;
console.log(typeof numero);

// Replace y ReplaceAll
let frase = "Voy en mi moto contento por la carretera y veo otra moto";
let nueva_frase = frase.replace("moto", "coche");
let nueva_frase2 = frase.replace(/moto/g, "coche");
let nueva_frase3 = frase.replaceAll("moto", "coche");
console.log(nueva_frase);
console.log(nueva_frase2);
console.log(nueva_frase3);

// Asignadores lógicos
let nombre = null;
let id = 80;

// nombre = nombre || id;
// nombre ||= id;
// nombre &&= id;
nombre ??= id;

// nombre += 2;
// nombre *= 2;

console.log(nombre);

