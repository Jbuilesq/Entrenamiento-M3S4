

document.getElementById('saveButton').addEventListener('click', () => {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    if(!nameInput || !ageInput){
        console.error('Los elemetos del formulario no existen.');
        return;
    }
    
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);
    
    if (name && !isNaN(age)) {
        localStorage.setItem('userName',name);
        localStorage.setItem('userAge', age);
        displayData();
    } else ('Por favor ingresa un nombre valido y una edad numerica');
});


function displayData() {
    const name= localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');
    const outputDiv = document.getElementById('output');
    if ( name && age){
        outputDiv.textContent = `Hola ${name}, tienes ${age} años. `

    } else {

        outputDiv.textContent = 'No hay datos almacenados. '
    }
}

window.onload = displayData;

if (!sessionStorage.getItem('interactionCount')){
    sessionStorage.setItem('interactionCount',0);
}

function uptadeInteractionCount() {
    let count = parseInt(sessionStorage.getItem('interactionCount'));
    count++;
    sessionStorage.setItem('interactionCount',count);
    console.log(`Interacciónes en esta sesion: ${count}`);
}

document.getElementById('saveButton').addEventListener('click', uptadeInteractionCount);
document.getElementById('clearButton').addEventListener('click', uptadeInteractionCount);

document.getElementById('clearButton').addEventListener('click', () => {
    localStorage.clear();
    displayData();
})