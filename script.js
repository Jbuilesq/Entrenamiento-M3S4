// Evento al hacer clic en el botón "Guardar"
document.getElementById('saveButton').addEventListener('click', () => {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

      // Validación del nombre
    if (name === "") {
        alert("El nombre no puede estar vacío.");
        return;
    }

    // Validación: edad vacía
    if (ageValue === "") {
        alert("La edad no puede estar vacía.");
        return;
    }

    // Validación de edad: no numérica
    if (isNaN(age)) {
        alert("La edad debe ser un número.");
        return;
    }

    // Edad negativa o cero
    if (age <= 0) {
        alert("La edad no puede ser negativa ni igual a cero.");
        return;
    }   
    localStorage.setItem('userName', name);
    localStorage.setItem('userAge', age);
    displayData();

});

// Inicializar contador de interacciones si no existe
if (!sessionStorage.getItem('interactionCount')) {
    sessionStorage.setItem('interactionCount', 0);
}


// Eventos para actualizar el contador en cada acción
document.getElementById('saveButton').addEventListener('click', updateInteractionCount);
document.getElementById('clearButton').addEventListener('click', updateInteractionCount);

// Borrar datos del localStorage y actualizar vista
document.getElementById('clearButton').addEventListener('click', () => {
    localStorage.clear();
    displayData();
});

// Función que muestra los datos guardados
function displayData() {
    const name = localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');
    const outputDiv = document.getElementById('output');

    if (name && age) {
        outputDiv.textContent = `Hola ${name}, tienes ${age} años.`;
    } else {
        outputDiv.textContent = 'No hay datos almacenados.';
    }
}

// Mostrar los datos al cargar la página
// window.onload = displayData;

// Función que incrementa el contador de interacciones
function updateInteractionCount() {
    let count = parseInt(sessionStorage.getItem('interactionCount'));
    count++;
    sessionStorage.setItem('interactionCount', count);
    console.log(`Interacciones en esta sesión: ${count}`);
}
