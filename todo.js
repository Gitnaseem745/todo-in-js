let newTodo = document.querySelector('.new-todo').value
let yourTodo = document.querySelector('.created-todos')

let addTodo = document.querySelector('.add-todo').addEventListener('click', function(){
    let todo = document.createElement("p")
    let todoText = document.createTextNode(newTodo)
    todo.style.backgroundColor = '#858585';
    todo.style.border = '1px solid black';
    todo.style.height = '40%'
    todo.style.width = '40%'
    todo.appendChild(todoText)
    yourTodo.appendChild(todo)
})
