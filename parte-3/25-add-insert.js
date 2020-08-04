/* 
CREAR E INSERTAR ELEMENTOS

- Crear un elemento: document.createElement(element);
- Escribir texto en un elemento: element.textContent = "texto";
- Escribir HTML en un elemento: element.innerHTML = HTML code

- Añadir un elemento al DOM: parent.appendChild(element);

- Fragmentos de código: document.createDocumentFragment();
*/

const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const title = document.getElementById('title');
const daysList = document.getElementById('daysList');
const selectDays = document.getElementById('daysSelect')

/* 
daysList.appendChild(itemList); */

const fragment = document.createDocumentFragment();
const fragSelect = document.createDocumentFragment();

for(const day of days){
    //daysList.innerHTML += `<li>${day}</li>`
    const itemList = document.createElement('li');
    itemList.textContent = day;
    fragment.appendChild(itemList);
}

for(const sday of days){
    const itemList = document.createElement('option');
    itemList.textContent = sday;
    fragSelect.appendChild(itemList);
}



daysList.appendChild(fragment);
selectDays.appendChild(fragSelect);
