const yourTodo = document.querySelector('.created-todos')

const addTodo = document.querySelector('.add-todo').addEventListener('click', function(){
    
    const newTodo = document.querySelector('.new-todo').value;
    
    const todoContainer = document.createElement('div');
    todoContainer.style.display = 'flex';
    todoContainer.style.alignItems = 'center';
    todoContainer.style.marginTop = '10px';
    yourTodo.appendChild(todoContainer);

    const todo = document.createElement("p");
    const todoText = document.createTextNode(newTodo);
    todo.style.backgroundColor = '#858585';
    todo.style.border = '1px solid black';
    todo.style.height = '38px';
    todo.style.width = 'auto';
    todo.style.padding = '10px';
    todo.appendChild(todoText);
    todoContainer.appendChild(todo);

    const delBtn = document.createElement('button');
    const btnText = document.createTextNode('Delete');
    delBtn.style.backgroundColor = 'red';
    delBtn.style.fontSize = '16px';
    delBtn.style.height = '30px';
    delBtn.style.width = '50px';
    delBtn.style.marginLeft = '10px';
    delBtn.style.display = 'inline-block';
    delBtn.appendChild(btnText);
    todoContainer.appendChild(delBtn);

    const editBtn = document.createElement('button');
    const editText = document.createTextNode('Edit');
    editBtn.style.backgroundColor = 'blue';
    editBtn.style.fontSize = '16px';
    editBtn.style.height = '30px';
    editBtn.style.width = '50px';
    editBtn.style.marginLeft = '10px';
    editBtn.style.display = 'inline-block';
    editBtn.appendChild(editText);
    todoContainer.appendChild(editBtn);

    delBtn.addEventListener('click',function(){
        todoContainer.remove();
    })
    
    editBtn.addEventListener('click', function(){

        todo.contentEditable = 'true';
        
        const saveBtn = document.createElement('button');
        const saveText = document.createTextNode('Save');
        saveBtn.style.backgroundColor = 'Yellow';
        saveBtn.style.fontSize = '16px';
        saveBtn.style.height = '30px';
        saveBtn.style.width = '50px';
        saveBtn.style.marginLeft = '10px';
        saveBtn.style.display = 'inline-block';
        saveBtn.appendChild(saveText);
        todoContainer.appendChild(saveBtn);

        saveBtn.addEventListener('click', function(){
            todo.contentEditable = 'false'
            saveBtn.remove()
    })
    })
}) 