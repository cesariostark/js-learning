/* OBJETOS
- Son estructuras de datos que representan propiedades, valores y acciones que puede realizar un objeto
- Todos los objetos tienen propiedades o atributos y comportamientos o acciones representados por pares de clave
(key): valor(value);

EJ:
const humano = {
    name: 'Nombre',
    age: 'age',
    familiy: ['familia']
}
*/


const person = {
    name: 'Cesar',
    age: 24,
    family: ['Maru', 'Molly', 'Paula', 'Amaro', 'Daira']
}
/*
console.log(person.name);
console.log(person['name']);
*/
/*
for(const key in person){

    console.log(key);
}

for(const key in person){
    console.log(person[key]);
}
*/

/* 
for(const son of person.family){

    console.log(son);
} */

console.log(`Hola ${person.name}. Tienes ${person.age} años y tu familia son: ${person.family.join(', ')}`);