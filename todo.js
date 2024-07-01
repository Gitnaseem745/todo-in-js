const yourTodo = document.querySelector('.created-todos');

// Load todos from local storage on page load
document.addEventListener('DOMContentLoaded', loadTodos);

document.querySelector('.add-todo').addEventListener('click', function() {
    const newTodo = document.querySelector('.new-todo').value;
    if (newTodo.trim() === '') return alert('Todo cannot be empty'); // Prevent empty todos

    createTodoElement(newTodo);
    saveToLocal(newTodo);
});

function createTodoElement(todoText) {
    // Creating container for todo items
    const todoContainer = document.createElement('div');
    todoContainer.style.display = 'flex';
    todoContainer.style.alignItems = 'center';
    todoContainer.style.marginTop = '10px';
    yourTodo.appendChild(todoContainer);

    // Creating a paragraph element for the todo text
    const todo = document.createElement('p');
    todo.textContent = todoText;
    todo.style.backgroundColor = '#858585';
    todo.style.border = '1px solid black';
    todo.style.height = '38px';
    todo.style.width = '200px';
    todo.style.overflowX = 'scroll';
    todo.style.padding = '10px';
    todoContainer.appendChild(todo);

    // Creating delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.style.backgroundColor = 'red';
    delBtn.style.fontSize = '16px';
    delBtn.style.height = '30px';
    delBtn.style.width = '50px';
    delBtn.style.marginLeft = '10px';
    delBtn.addEventListener('click', function() {
        todoContainer.remove();
        removeFromLocal(todoText);
    });
    todoContainer.appendChild(delBtn);

    // Creating edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.style.backgroundColor = 'blue';
    editBtn.style.fontSize = '16px';
    editBtn.style.height = '30px';
    editBtn.style.width = '50px';
    editBtn.style.marginLeft = '10px';
    editBtn.addEventListener('click', function() {
        todo.contentEditable = 'true';
        editBtn.remove();

    // Creating save button
    const saveBtn = document.createElement('button');
     saveBtn.textContent = 'Save';
     saveBtn.style.backgroundColor = 'Yellow';
     saveBtn.style.fontSize = '16px';
     saveBtn.style.height = '30px';
     saveBtn.style.width = '50px';
     saveBtn.style.marginLeft = '10px';
     saveBtn.addEventListener('click', function() {
        todo.contentEditable = 'false';
        saveBtn.remove();
        todoContainer.append(editBtn);
        updateToLocal(todoText, todo.textContent);
      });
        todoContainer.appendChild(saveBtn);
    });
    todoContainer.appendChild(editBtn);
}

    // if is added because i was getting filter & push is not a fuction like errors
    // saving new todo to localstorage

function saveToLocal(todo) {
    let todos = JSON.parse(localStorage.getItem('todos'));
    if (!Array.isArray(todos)) {
        todos = [];
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

    // loading todos when page loads

function loadTodos() {
    let todos = JSON.parse(localStorage.getItem('todos'));
    if (!Array.isArray(todos)) {
        todos = [];
    }
    todos.forEach(todo => {
        createTodoElement(todo);
    });
}

    // deleting todo from localstorage 

function removeFromLocal(todoText) {
    let todos = JSON.parse(localStorage.getItem('todos'));
    if (!Array.isArray(todos)) {
        todos = [];
    }
    todos = todos.filter(t => t !== todoText);
    localStorage.setItem('todos', JSON.stringify(todos));
}

    // updating todo in localstorage 

function updateToLocal(oldTodo, newTodo) {
    let todos = JSON.parse(localStorage.getItem('todos'));
    if (!Array.isArray(todos)) {
        todos = [];
    }
    const todoIndex = todos.indexOf(oldTodo);
    if (todoIndex > -1) {
        todos[todoIndex] = newTodo;
    }
    localStorage.setItem('todos', JSON.stringify(todos));
}