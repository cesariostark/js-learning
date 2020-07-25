/*
Arrays - Arreglos

- Son estructuras que nos permiten almacenar varios datos y agruparlos.
- Se pueden llenar con cualquier tipo de dato valido en JavaScript y deben ser separados por comas.
- Se pueden mezclar tipos de datos, pero no es recomendable
- Se declaran con llaves cuadradas o corchetes []
- Pueden declarase vacíos o con un contenido ya establecido.
- Pueden añadirse o eliminarse elementos en el momento que queramos.

Ejemplos anteriores: 

let numero = 5;

let array = [] //Array vacio
let numeros = [1,2,3,4,5] //Array con contenido inicial
*/

let numeros = [1,2,3,4,5];

let palabras = ['hola', 'Paula', 'te', 'amo'];

console.log(numeros);
console.log(numeros[3]);
console.log(palabras[1].length);

console.log(`El nombre ${palabras[1]} tiene ${palabras[1].length} letras`);
