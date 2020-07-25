/* Strings */

let cadena = "Hola mundo";

/* Propiedades 

length -> Devuelve la longitud de la cadena

*/

console.log(cadena.length);

/* Métodos

toUpperCase() -> Devuelve la cadena en mayúsculas
*/

let cadenaMayus = cadena.toUpperCase();
console.log(cadenaMayus);

/*

toLowerCase() -> Devuelve la cadena en minúsculas
*/

let cadenaMinus = cadena.toLowerCase();
console.log(cadenaMinus);

/*

indexOf(string) -> Devuelve la posición en la que se encuentra el strig, si no lo encuentra devuelve -1
*/

console.log(cadena.indexOf('buscar palabra'));

/* 

replace(valor a buscar, valor nuevo) -> Reemplaza el fragmento de la cadena que le digamos y pone el valor nuevo
*/

console.log(cadena.replace('mundo', 'chavales'));

/*

substring(inicio [, fin]) -> Extrae los caracteres desde inicio hasta fin (el final no se incluye)

si no se incluye el fin extrae hasta el final
*/

console.log(cadena.substring(5));

/*

slice(inicio [,fin]) -> Igual que substring pero admite valores negativos,
si ponemos valores negativos empezara desde atrás

Si no se incluye el final extrae hasta el final
(2,-4) ->Empieza a contar en el tercer caracter y los 4 ultimos no los considera

*/

console.log(cadena.slice(2,-4));
console.log(cadena.slice(0,-5));

/* 

trim() -> Elimina los espacios al inicio y al final de la cadena
*/

let cadena2 = '      Hola youtube, estamos trabajando con cadenas';

console.log(cadena2.trim());

/*

--ES6--

startsWith(valor [,inicio]) -> Sirve para saber si la cadena empieza con ese valor. Devuelve true o false.

*/

console.log(cadena.startsWith('H'));
console.log(cadena.startsWith('h'));
console.log(cadena.startsWith('M', 5));

/*

endsWith(valor [, longitud]) -> Sirve para saber si la cadena termina con ese valor. Devuelve true o false.
*/

console.log(cadena.endsWith('o'));
console.log(cadena.endsWith('m', 6));
console.log(cadena.endsWith('a'));

/*

includes(valor [, inicio]) -> Igual que indexOf pero devuelve true o false.
*/

console.log(cadena.includes('m'));
console.log(cadena.includes('a', 3));

/*

repeat(valor) -> Repite el string el numero de veces que le indiquemos.
*/

let cadena3 = 'Hola';

console.log(cadena3.repeat(5));
console.log('a'.repeat(10));


/*Template Strings*/

let nombre = 'Paula';
let apellido = 'Cortes';
let edad = 21;

console.log('Hola '+ nombre + " " + apellido + ". Tienes " + edad + " años.");
console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años`);


