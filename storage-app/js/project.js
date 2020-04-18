console.log("I am new project js");

//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

//Event Listener
document.addEventListener('DOMcontentLoaded',getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck );
filterOption.addEventListener('click', filterTodo);

//Functions

function addTodo(event){
    console.log("Hello I'm Function");
    //prevent  form form submiting
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //ADD TODO TO LOCAL STORAGE
    saveLocalTodos(todoInput.value);


    //Check Mark Button
    const completedButton = document.createElement('button');
    //completedButton.innerText = '<i class="fas fa-check"></i>';
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Check Trash Button
    const trashButton = document.createElement('button');
    //trashButton.innerText = '<i class="fas fa-check"></i>';
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //apend TO LIST

    todoList.appendChild(todoDiv);

    //clear todo INPUT VALUE
    todoInput.value = "";
}

function deleteCheck(e){
    //console.log(e.target);
    const item = e.target;
    //delete todo
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
    }

    //check mark
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}


function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){

                    todo.style.display = 'flex';
                }else{
                    todo.style.display = "none";
                }
                break;
        }       
    });
}

function saveLocalTodos(todo){
    //check -- hey Do I already have thing in there?
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos(){
     //check -- hey Do I already have thing in there?
    console.log("Hey");
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(function(todo){
        //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todo;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check Mark Button
    const completedButton = document.createElement('button');
    //completedButton.innerText = '<i class="fas fa-check"></i>';
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Check Trash Button
    const trashButton = document.createElement('button');
    //trashButton.innerText = '<i class="fas fa-check"></i>';
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //apend TO LIST

    todoList.appendChild(todoDiv);       
    });

}

function removeLocalTodos(todo){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    
   // console.log(todo.children[0].innerText);
   const todoIndex = todo.children[0].innerText;
   todos.splice(todos.indexOf(todoIndex), 1);
   // console.log(todos.indexOf('apple'));
   localStorage.setItem('todos',JSON.stringify(todos));
    
}