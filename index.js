document.addEventListener("DOMContentLoaded", function(){
    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    //Funcion para agregar una tarea nueva
    function addTodo(event){
        event.preventDefault(); //Evita que se envie el formulario.
        const todoText = todoInput.value.trim(); // Obtener el valor del input sin espacios en blanco al inicio o final

        if (todoText !== "") {
            const todoItem = document.createElement("li");
            todoItem.innerText = todoText;

            //Crear contenedor para la tarea y el boton de eliminar
            const todoContainer = document.createElement("div");
            todoContainer.classList.add("todo-container");

            //Crear un span para el texto de la tarea
            const todoTextSpan = document.createElement("span");
            todoTextSpan.textContent = todoText;

            //Agregar boton de eliminar
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "Eliminar";
            deleteButton.classList.add("delete-button");
            deleteButton.addEventListener('click', deleteTodo);
            todoItem.appendChild(deleteButton);

            
            


            todoItem.addEventListener('click' , toggleTodo); // Marcar como completada al hacer click en la tarea.
            todoList.appendChild(todoItem);
            todoInput.value = ""; //Limpia el input despues de agregar una tarea
        }
    }

    //Funcion para marcar la tarea como completada.
    function toggleTodo(){
        this.classList.toggle("completed")
    }

    //Funcion para eliminar una tarea.
    function deleteTodo(){
        event.stopPropagation();
        this.parentNode.remove();
    }

    //Evento para agregar una tarea cuando se envie el formulario.
    todoForm.addEventListener('submit', addTodo);

    //Evento para marcar una tarea como completada cuando se hace click en ella.
    todoList.addEventListener('click', function(event){
        if (event.target.tagName === "span") {
            toggleTodo.call(event.target.parentNode.parentNode);
        }
    })
})