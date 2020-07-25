/* ARRAYS II - MÉTODOS

    .from(iterable) - Convierte un array en el elemento itrable.
    un elemento iterable es todo lo que se puede recorrer.
*/

/* let word = 'Hola mundo';

console.log(Array.from(word));
console.log(word.split('')); */

/* 
    .sort([callback]) - Ordena los elementos de un array alfabéticamente (valor Unicode), si le pasamos un callback, 
                        los ordena en función al algoritmo que le pasemos.

    .sort((a,b)=>a-b)

    function menorMayor(a, b) {
        if(a-b < 0) return -1;
        if(a-b > 0) return 1;
        if(a==b) return 0;
    }

    function mayorMenor(a, b){
        if(b-a < 0) return -1;
        if(b-a > 0) return 1;
        if(b==a) return 0;
    }
    
*/

/* const letters = ['b', 'c', 'z', 'a'];
const numbers = [1,2,3,4,5];
console.log(letters.sort());
console.log(numbers.sort((a,b) => b-a)); */

/* 
    .foreach(callback(currentValue, [index])) - Ejecuta la funcion indicada una vez por cada elemento el array. 
*/

/* onst numbers = [12, 25, 46, 49, 98];c
numbers.forEach((number) => console.log(number)) */

/* 
    .some(callback) - Comprueba si al menos un elemento del array cumple con la condición
*/

/* const words = ['HTML', 'CSS', 'JavaScript', 'PHP'];
console.log(words.some(word => word.length>2)); */


/* 
    .every(callback) - Comprueba si todos los elementos del array cumplen la condición
*/

/* console.log(words.every(word => word.length>4)); */

/* 
    .map(callback) - Transforma todos los elementos del array y devuelve un nuevo array
*/

/* const numbers = [12, 25, 46, 49, 98];
numbers.map((number) => console.log(number*2)); */

/* 
    .filter(callback) - Filtra todos los elementos que cumplan con la condicion y devuelve un nuevo array
*/

/* const numbers = [12, 25, 46, 49, 98];

const numbers2 = numbers.filter(number => number<40);
console.log(numbers2) */

/* 
    .reduce(callback) - Reduce todos los elementos del array a un único valor.
*/

/* const numbers = [12, 25, 46, 49, 98];

console.log(numbers.reduce((a,b) => a+b)); */

