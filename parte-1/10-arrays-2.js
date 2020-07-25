let numbers = [1,2,3,4,5];

/*
    Arrays - Propiedad
        Array.length - devuelve el número de posiciones que contiene el array
*/

console.log(numbers.length);
/*

    Arrays - Métodos
        Array.isArray(variable a igualar) - devuelve true si la variable es un array.
*/

let number = 4;
console.log(Array.isArray(number));
console.log(Array.isArray(numbers));


/*

        Eliminar un elemento
            .shift() - Elimina el primer elemento del array y devuelve ese elemento.
            .pop() - Elmina el último elemento de un array y devuelve ese elemento.
*/

console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.pop();
console.log(numbers);

/*

        Añadir elemento
            .push(element1, element2, ...) - Añade uno o más elementos al final del array y devuelve la nueva longitud.
            .unshift(element1, element2,...) - Añade uno o más elementos al comienzo del array y devuelve a nueva longitud.

*/

numbers.push(5);
console.log(numbers);
numbers.unshift(1);
console.log(numbers);
numbers.push(5);

/*

            .indexOf() - Devuelve el primer índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado

*/
console.log(numbers);
console.log(numbers.indexOf(3));
/*

            .lastIndexOf() - Devuelve el último índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.
*/

console.log(numbers);
console.log(numbers.lastIndexOf(5));
/*

            .reverse() - Invierte el orden de los elementos del array.
*/

console.log(numbers.reverse());

/*

            .join(separador) - Devuelve un string con el separador que indiquemos, por defecto son comas
*/

console.log(numbers);
let arrayString = numbers.join(' ');
console.log(arrayString);
console.log(numbers.join('-'));

/*

            .splice(a,b,items) - Cambia el contenido de un array eliminando elementos existentes
            y/o agregando nuevos elementos

            a - Indice de inicio
            b - Número de elementos
            items - Elementos a añadir en el caso que de que se añadan.
*/


console.log(numbers);
//numbers.splice(3);
//console.log(numbers);
//numbers.splice(2,2);
//console.log(numbers);
numbers.splice(2, 2, 45, 53, 65);
console.log(numbers);

/*

            .slice(a,b) - Extrae elementos de un array desde el índice "a" hasta el indice "b". Si no
            existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia original
*/

let newNumbers = numbers.slice(2,4);
console.log(newNumbers);