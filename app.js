// selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
// Event listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);
// Function
function addTodo(event){
    // prevent  form sumbiting
    event.preventDefault();
    // todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // creat li
    const newTodo = document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // complete chk mark button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fa fa-check-square" aria-hidden="true"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    // compelte trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // todoList.appendChild(todoDiv);
    todoList.appendChild(todoDiv);
    // clear todo input value
    todoInput.value = "";
}
function deleteCheck(e){
    const item = e.target;
    // delete todoList
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        // animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
// function fiterTodo(e){
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo){
//         switch (e.target.value){
//             case "all":
//                 todo.style.display = "flex";
//                 break;
//             case "completed":
//                     if(todo.classList.contains("completed")){
//                         todo.style.display = "flex";
//                     }else{
//                         todo.style.display = "none";
//                     }
//                     break;
//             case "uncompleted":
//                     if(!todo.classList.contains('completed')){
//                         todo.style.display = "flex";
//                     }else{
//                         todo.style.display = "none";
//                     }
//                     break;
                    
//             }
//     });
// }
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "All":
                todo.style.display="block";
            break;
            case "Completed":
                if(todo.classList.contains("Completed")){
                    todo.style.display="flex";
                }else{
                    todo.style.display="none";
                }
                break;
            case "Uncompleted":
                if(!todo.classList.contains("Completed")){
                    todo.style.display="flex";
                }else{
                    todo.style.display="none";
                }
                break;
        }
    });
}