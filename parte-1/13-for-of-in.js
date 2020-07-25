/*
BUCLE FOR OF / FOR IN

- Simplifica el bucle for tradicional sin tener que darle un numero de vueltas ni realizar incrementos.

    for(let variable of/in estructura){
        //codigo a ejecutar
    }

    FOR OF -> Recorre y devuelve el valor de la posición.
    FOR IN -> Recorre y devuelve el índice de la posición. (Orientado a objeto).
*/

let names = ['César', 'Paula', 'Ignacio', 'Ignacia'];


for(let name of names){

    console.log(name);
}

for(let index in names){

    console.log(index);
}
