    // Seleção de elementos
const todoForm = document.querySelector("todo-form");
const todoInput = document.querySelector("todo-input");
const todoList = document.querySelector("todo-lis");
const editForm = document.querySelector("edit-form");
const editInput = document.querySelector("edit-input");
const cancelEditBtn = document.querySelector("cancel-edit-btn");



    // Funções
//Salva os elementos do todo
const saveTodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("todo") //criando a div

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text //aqui é a mágica
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button") //botao da div
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(doneBtn)

    const editBtn = document.createElement("button") //botao da div
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editBtn)

    const deleteBtn = document.createElement("button") //botao da div
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deleteBtn)

    todoList.appendChild(todo)
}

    // Eventos
//
todoForm.addEventListener("submit", (e) =>  {
    e.preventDefault();

    const inputValue = todoInput.value;

    if(inputValue){
        saveTodo(inputValue)
    }
});