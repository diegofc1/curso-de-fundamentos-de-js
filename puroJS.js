//Hola, iniciamos este archivo para aprender todo acerca de JS!! Espero puedas lograrlo
console.log("Bienvenido Diego, inicia tu aprendizaje ahora");
//TIPOS DE DATOS:
// //PRIMITIVOS: 
// string, number, boolean, null, undefined, symbol, BigInt
let nombre= "Diego";
let edad= 28; 
let casado= false; 
let IntoMen= true; 
let vacio= null; //Este tipo de dato lo usamos nosotros a voluntad.
let noDefinido= undefined; //JavaScript se encarga de proporcionarnos este dato.
let simboloUnico= Symbol("único");
//bigInt
let numerosGrandes= 2n;
let numeroGrande= BigInt(34);

// //COMPLEJOS: 
// object, array, function

// NÚMEROS COMPLEJOS EJEMPLO: 
let persona= {nombre: "Diego", edad: 27, genero: "M", celular:1234567};

let frutas= ["manzana","pera","banano","uvas","sandía"];

function realidad(){
    console.log(`A ${persona.nombre} le gustan mucho las ${frutas[3]}`);
}
realidad();
