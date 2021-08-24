function addTodo(){
    let inputValue=document.getElementsByClassName("todoInput")[0];
    console.log(inputValue.value);
    
    let newTodo=document.createElement("div");
    newTodo.innerText=inputValue.value;
    let uniqueId=Math.random();
    newTodo.classList.add(uniqueId);
    
    let newTododelete=document.createElement("button");
    newTododelete.innerText='X';
    newTododelete.setAttribute("id",uniqueId);
    newTododelete.addEventListener('click',deleteTodo);
    

    let todoList=document.getElementsByClassName("todoList")[0];
    todoList.appendChild(newTodo);
    todoList.appendChild(newTododelete);
    inputValue.value="";
}

function deleteTodo(event){
    let uniqueId=event.target.id;
    var referenceTodo=document.getElementsByClassName(uniqueId)[0];
    referenceTodo.remove();
    event.target.remove();
}
let addButton=document.getElementsByClassName("addButton")[0];
addButton.addEventListener('click',addTodo);