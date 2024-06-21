let yourTodo = document.querySelector('.created-todos')

let addTodo = document.querySelector('.add-todo').addEventListener('click', function(){
    let newTodo = document.querySelector('.new-todo').value
    let todo = document.createElement("p")
    let todoText = document.createTextNode(newTodo)
    todo.style.backgroundColor = '#858585';
    todo.style.border = '1px solid black';
    todo.style.height = '38px'
    todo.style.width = '40%'
    todo.style.padding = '10px'
    todo.style.marginTop = '10px'
    todo.appendChild(todoText)
    yourTodo.appendChild(todo)
    let delBtn = document.createElement('button')
    let btnText = document.createTextNode('Delete')
    delBtn.style.backgroundColor = 'red';
    delBtn.style.fontSize = '16px'
    delBtn.style.height = '30px'
    delBtn.style.width = '50px'
    delBtn.style.display = 'inline-block'
    delBtn.appendChild(btnText)
    yourTodo.appendChild(delBtn)
    delBtn.addEventListener('click',function(){
        todo.remove()
        delBtn.remove()
    })
})
