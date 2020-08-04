/*
EVENTOS

- Un evento es cualquier cosa que sucede en nuestro documento
    * El contenido se ha leído
    * El contenido se ha cargado
    * El usuario mueve el raton
    * El usuario pulsa una tecla
    * La venta se ha cerrado
    * etc 

    .addEventListener('event', callback);

*/

/* 
Eventos de ratón:
    - click: cuando pulsamos el boton izquierdo del ratón
    - dblclick: cuando pulsamos dos veces seguidas el btn izquierdo del ratón
    - mouseenter: cuando entramos a la zona que tiene el evento
    - mouseleave: cuando salimos de la zona que tiene el evento.
    - mousedown: cuando pulsamos y no soltamos el botón izquierdo del ratón.
    - mouseup: cuando soltamos el boton izquierdo del ratón.
    - mousemove: cuando movemos el ratón
*/

const button = document.getElementById('button');
const box = document.getElementById('box');
const input = document.getElementById('input');
//click

//button.addEventListener('click', () => console.log('Click'));

//dblclick
//button.addEventListener('dblclick', () => console.log('Doble Click'));

//mouseenter
//box.addEventListener('mouseenter', () => {box.classList.add('green')});

//mouseleave
//box.addEventListener('mouseleave', () => {box.classList.replace('green', 'red');});

//mousedown
/* box.addEventListener('mousedown', () => {
    console.log('Has pulsado la caja');
}); */

//mouseup
/* box.addEventListener('mouseup', () => {
    console.log('Has soltado el ratón en la caja');
}); */

//mousemove
/* box.addEventListener('mousemove', () => {
    console.log('Estás moviendo el cursos dentro de la caja');
}); */


/*
EVENTOS DE TECLADO:

    -keydown: cuando pulsamos una tecla
    -keyup: cuando soltamos una tecla
    -keypress: cuando pulsamos una tecla y no la soltamos
*/

//keydown
/* input.addEventListener('keydown', () => {
    console.log('Has pulsado una tecla');
});
 */

//keyup
/* input.addEventListener('keyup', () => {
    console.log('Has soltado una tecla')
} ) */

//keypress
/* input.addEventListener('keypress', () => {
    console.log('Has presionado una tecla')
} ) */