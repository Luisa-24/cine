/* Selecciona elementos del DOM */

/* Seleccionar por ID */
const form = document.getElementById('task-form');
const taskImput = document.getElementById('task');
const message = document.getElementById('message');


/* Seleccionar por clase */
const card = document.querySelector('.task-card');

/* Seleccionar por etiqueta */
const title = document.querySelector("h1");
const button= document.querySelector("button");


// Modificar elementos del DOM

/* Cambiar texto */
title.textContent = "StudyFlow - Organiza tus tareas";

/* Cambiar atributo */
title.setAttribute("class", "destacado");

/* Modificar las clases de un elemento */
/* Agregar una clase */
title.classList.add("destacado");

/* Remover una clase */
title.classList.remove("destacado");

/* Mostrar y no mostrar una contraseña */
title.classList.toggle("destacado");

//Eventos

// click
// submit
// change
// input
// keydown
// keyup
// focus

//button.addEventListener("click", function() {
    //alert("Haz hecho click en el botón");
//});

//Validación de formulario
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const task = taskInput.value.trim();

    if (task === "") {
        message.textContent = "Por favor, ingresa una tarea.";
        message.style.color = "red";
        return;
    }
});

