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

function gustos(){
    console.log(`A ${persona.nombre} le gustan mucho las ${frutas[3]}`);
}
gustos();
// ===============================
// 1. length → longitud del string
// ===============================
let texto = "Hola mundo";
console.log(texto.length); 
// Resultado: 10 (cuenta caracteres, incluyendo espacios)


// ===============================
// 2. toUpperCase() / toLowerCase()
// ===============================
let palabra = "JavaScript";

console.log(palabra.toUpperCase()); 
// "JAVASCRIPT" → convierte a mayúsculas

console.log(palabra.toLowerCase()); 
// "javascript" → convierte a minúsculas


// ===============================
// 3. indexOf() → buscar posición
// ===============================
let frase = "Hola mundo";

console.log(frase.indexOf("mundo")); 
// 5 → posición donde empieza "mundo"

console.log(frase.indexOf("x")); 
// -1 → no encontró el texto


// ===============================
// 4. includes() → verificar si existe
// ===============================
let mensaje = "Estoy aprendiendo JS";

console.log(mensaje.includes("JS")); 
// true → sí existe

console.log(mensaje.includes("Python")); 
// false → no existe


// ===============================
// 5. slice() → cortar parte del string
// ===============================
let texto2 = "JavaScript";

console.log(texto2.slice(0, 4)); 
// "Java" → desde índice 0 hasta 3

console.log(texto2.slice(4)); 
// "Script" → desde índice 4 hasta el final


// ===============================
// 6. substring() → similar a slice
// ===============================
let texto3 = "Programar";

console.log(texto3.substring(0, 4)); 
// "Prog"


// ===============================
// 7. replace() → reemplazar texto
// ===============================
let texto4 = "Hola mundo";

console.log(texto4.replace("mundo", "Diego")); 
// "Hola Diego" → reemplaza solo la primera coincidencia


// ===============================
// 8. replaceAll() → reemplazar todo
// ===============================
let texto5 = "hola hola hola";

console.log(texto5.replaceAll("hola", "hey")); 
// "hey hey hey"


// ===============================
// 9. trim() → eliminar espacios
// ===============================
let texto6 = "   hola   ";

console.log(texto6.trim()); 
// "hola" → elimina espacios al inicio y final


// ===============================
// 10. split() → convertir en array
// ===============================
let texto7 = "manzana,pera,uva";

console.log(texto7.split(",")); 
// ["manzana", "pera", "uva"]


// ===============================
// 11. concat() → unir strings
// ===============================
let a = "Hola";
let b = "Mundo";

console.log(a.concat(" ", b)); 
// "Hola Mundo"


// ===============================
// 12. charAt() → obtener carácter
// ===============================
let texto8 = "JavaScript";

console.log(texto8.charAt(0)); 
// "J"


// ===============================
// 13. startsWith() / endsWith()
// ===============================
let texto9 = "Hola mundo";

console.log(texto9.startsWith("Hola")); 
// true → empieza con "Hola"

console.log(texto9.endsWith("mundo")); 
// true → termina con "mundo"
