/*

Objeto Math

Objeto estático

Tenemos que usa su nombre para utilizarlo

Propiedades:

    Math.E - Math.Pi

Métodos:
*/

console.log(Math.E);
console.log(Math.PI);

/* 
Math.abs(x) -> Devuelve el valor absoulto de x
*/
let num = 5;
let num1 = 5.7;
let num2 = 2;
let num3 =-1;

console.log(Math.abs(num));

/* 
Math.ceil(x) -> Devuelve el entero más grande mayor o igual que un numero.
*/

console.log(Math.ceil(num1));

/*
Math.floor(x) -> Devuelve el entero más pequeño menor o igual que un numero.
*/

console.log(Math.floor(num1));

/*
Math.pow(x,y) -> Devuelve la potencia de x elevado a y.
*/

console.log(Math.pow(num, num2));

/*
Math.random() -> Genera un numero pseudoaleatorio entre 0 y 1.
*/

console.log(Math.random());

/*
Math.round(x) -> Devuelve el valor de un numero redondeado al entero más cercano.
*/

console.log(Math.round(num1));

/*
Math.sign(x) -> Devuelve el signo de la x, que indica si es positivo, negativo o cero.
*/

console.log(Math.sign(num3));

/*
Math.sqrt(x) -> Devuelve la raíz cuadrada de x
*/

console.log(Math.sqrt(num));
