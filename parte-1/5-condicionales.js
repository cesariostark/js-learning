/* Condicional simple */

let num = 5;

if(num>0){

    console.log(`${num} es mayor que 0`);
}

/* Condicional compuesto */

if(num<0){

    console.log(`${num} es menor que 0`);
}else{

    console.log(`${num} es mayor que 0`);
}

/* Condicional múltiple */

if(num>0){

    console.log(`${num} es mayor que 0`);
}else if(num<0){

    console.log(`${num} es menor que 0`);
}else{

    console.log(`${num} es igual a 0`);
}

/* Operadores lógicos */

/* && and */
/* || o */

let num1 = 3;
let num2 = 2;

if(num1>0 && num2>0){

    console.log(`${num1} y ${num2} son mayores que 0`);
}

if(num1>0 || num2>0){

    console.log(`${num1} o ${num2} son mayores que 0`);
}

if(num1>2){

    if(num2>2){
     
        console.log(`${num1} y ${num2} son mayores que 2`);
    }else{

        console.log(`${num1} es mayor que 2, mientras que ${num2} no lo es`);
    }
}

let word = 'hola';

if(word.length>4){

    console.log(`${word} tiene mas de 4 letras`);
}else if(word.length<0){

    console.log(`${word} tiene menos de 4 letras`);
}else{

    console.log(`${word} tiene 4 letras`);
}

let respuesta = true;

if(respuesta==true){

    console.log(`Respuesta tiene el valor true`);
}else{

    console.log(`Respuesta tiene el valor false`);
}

let respuesta1 = true;
if(respuesta1){
    console.log(`Respuesta tiene el valor true`);
}

if(!respuesta1){

    console.log(`Respuesta tiene el valor false`);
}
