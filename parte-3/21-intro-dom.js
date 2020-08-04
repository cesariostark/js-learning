/* 

document.getElementById('id') - Acceder a un elemento a través de su id

document.querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS

document.querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodelist


- Los elementos siempre se guardan en una constante
*/

/* const title = document.getElementById('title');

title.textContent = 'DOM - Accediendo a Nodos'; */

/* const paragraph = document.querySelector('.paragraph');

console.log(paragraph); */

const paragraphs = document.querySelectorAll('.paragraph');

/* const pSpread = [...document.querySelectorAll('.paragraph')]; //No funca en todos los navegadores*/
/* const pArray = Array.from(document.querySelectorAll('.paragraph'));
paragraphs[0].style.color = 'red';

pArray.map(p => p.style.color = 'green'); */
