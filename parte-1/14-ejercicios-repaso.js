/*
 Ejercicios de repaso

 1 - Solicita el nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ___ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt (mensaje) y haz uso de los template strings
 */

 //let nombre = prompt('Ingrese su nombre');
 //let edad = parseInt(prompt('Ingrese su edad'));
 //console.log(`Hola ${nombre}, tienes ${edad} y el año que viene tendrás ${edad} años.`);

 /*
 
 2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. 
En primer lugar pregunta de que figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.

    triángulo = (b*h)/2
    rectángulo = b*h
    circulo = pi*r2 

 */
/*
let figura = prompt('¿Qué área figura geométrica desea calcuar? Figuras: Triángulo, Círculo, Rectángulo');

if(figura=='triangulo' || figura=='Triángulo' || figura=='triángulo'){

        let baset = parseInt(prompt('Ingrese base de triángulo:'));
        let alturat = parseInt(prompt('Ingrese altura de triángulo:'));

        let areatriangle = (baset*alturat)/2;
        prompt(`El cálculo de área es: ${areatriangle}`);
}else if(figura=='circulo' || figura=='Círculo' || figura=='círculo'){

        let radio = parseInt(prompt('Ingrese el radio del círculo:'));

        let areacircle = (Math.PI*radio*radio);
        prompt(`El cálculo de área es: ${areacircle}`);
}else if(figura=='rectangulo' || figura=='Rectángulo' || figura=='rectángulo'){

    let baser = parseInt(prompt('Ingrese base del rectángulo:'));
    let alturar = parseInt(prompt('Ingrese altura del rectángulo'));
    
    let arearectangle = (baser*alturar);
    prompt(`El cálculo de área es: ${arearectangle}`);
}*/
 /*
 
 3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
 si el numero es 5 el resultado será:
    1 - es impar
    2 - es par
    3 - es impar
    4 - es par
    5 - es impar
 */
/* 
let numero = parseInt(prompt('Ingrese un número '));

for(i=1;i<=numero;i++){

    if(i%2==0){
        console.log(`El número ${i} es par`);
    }else{
        console.log(`El número ${i} es impar`);
    }
}
*/
 /*
 
 4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número es primo o no.
    Un número primo es aquel que solo es divisible por si mismo y la unidad.
 */
/*
 let numprimo = parseInt(prompt('Ingrese un número entero mayor a 1'));
 let divisores = 0;

for(let i=2;i<numprimo; i++){

    if(numprimo%i==0){
        console.log(`${numprimo} / ${i} = ${numprimo/i}`);
        divisores++;
        break
    }
}

if(divisores==0){
    console.log(`${numprimo} es primo.`)
}
*/

 /*
 
 5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
 El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

 !5 = 5*4*3*2*1 = 120
 */
/*
 let factorial = parseInt(prompt('Ingrese un número para calcular factorial'));

 if(factorial==0){
     prompt('Número no válido');
 }

 let resultado = 1;
 
 for (let i=factorial; i>0; i--){

    resultado = resultado*i;
 }
 console.log(`El resultado de ${factorial}! es ${resultado}.`);
 */

 /*
 
 6 - Escribe un prgrama que permita ir introduciendo una serie indeterminada de números mientras su suma no supere 50. 
 Cuando esto ocurra, se debe mostrar el total acumulado y el contado de cuantos números se han introducido.
 */
/*
let suma = 0;
let contador = 0;
while(suma<50){

    let num = parseInt(prompt('Ingrese un número: '));

    suma = suma + num;
    contador++;
}

console.log(`Se han ingresado ${contador} número(s) y la suma de todos los números ingresados es: ${suma}.`);
*/

 /*
 
 7 - Crea 3 arrays. El primero tendrá 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos.
 Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par
 guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
    - la multiplicación que se produce junto con su resultado con el format 2 x 3 = 6
    - el array de pares e impares
 */

/*
let numeros = [1, 2, 3, 4, 5];
let pares = [];
let impares = [];
let resultado;
let factor;
for (let i=0; i<numeros.length; i++){
    
    factor = (Math.round(Math.random()*(10-1)+1));
    resultado = numeros[i]*factor;

    if(resultado%2==0){
        pares.push(resultado);
    }else{
        impares.push(resultado);
    }
    console.log(`El resultado de ${numeros[i]} x ${factor}`);
}
console.log(pares);
console.log(impares);
*/
 /*
 
 8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede 
 ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del numero introducido entre 23
*/
/*
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'T', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V',
                'H', 'L', 'C', 'K', 'E', 'T'];
 
const dni = parseInt(prompt('Introduce tu dni'));

if(dni.length == 8 && parseInt(dni)>0){

    console.log(`Tu DNI completo es ${dni}${letras[dni%23]}`);
}
*/
/*
9 - Solicitar al usuario una palabra y mostrar por consola el numero de consonantes, vocales y longitud de la palabra.

*/
/*
const palabra = prompt('Ingrese una palabra:').toLowerCase();

let consonantes = 0;
let vocales = 0;

for(const letra of palabra){
    if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u'){
        vocales++;
    }else{consonantes++;}
}
console.log(`Tu palabra tiene ${vocales} vocales y ${consonantes} consonantes`);
console.log(`La palabra "${palabra}" tiene una longitud de ${palabra.length} caracteres`);
*/

/*

10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si 
un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

*/

let colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

let color = prompt('Ingrese color a saber en el arreglo');



    (colores.indexOf(color) !== -1) ? console.log('El color está en el array') : console.log('El color no está en el array');
