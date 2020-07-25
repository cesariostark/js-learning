/*
SPREAD OPERATOR (Operador de expansión)

Su sintaxis es...

*/

//Enviar elementos en un array a una función
/* const numbers = [-12, 2, 3, 23, 43, 2, 3];

console.log(...numbers);

const addNumbers = (a,b,c) =>{
    console.log(a+b+c);
}

let numbersToAdd = [1,2,3];
addNumbers(...numbersToAdd); */

//Añadir un array a otro array

/* let newUsers = ['marta', 'jonas', 'ulrich', 'adam'];

let users = ['magnus', 'bartosz', 'katarina', 'charlotte', 'Hannah'];

users.push(...newUsers);

console.log(users); */

//Copiar arrays

/* let arr1 = [1,2,3,4];
let arr2 = [...arr1];
console.log(arr2); */

//Concatenar Array

/* let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];

let arrconcat = [...arr1, ...arr2];
console.log(arrconcat); */

//Enviar un número indefinido de argumentos a una función (parámetros REST)
/* 
const restParams = (...numbers) =>{
    console.log(numbers);
} */

//Libreria MATH
const numbers = [-12, 2, 3, 23, 43, 2, 3];
/*
console.log(Math.max(...numbers));
console.log(Math.min(...numbers)); */

//Eliminar elementos duplicados

console.log([... new Set(numbers)]);
