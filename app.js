const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `
            ${todo}
            <button onclick="deleteTodo(${index})">O'chirish</button>
        `;
        todoList.appendChild(li);
    });
}

addBtn.onclick = () => {
    const todoText = todoInput.value.trim();
    if (todoText) {
        todos.push(todoText);
        todoInput.value = '';
        saveToLocalStorage();
        renderTodos();
    }
};

function deleteTodo(index) {
    todos.splice(index, 1);
    saveToLocalStorage();
    renderTodos();
}

function saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

renderTodos();
