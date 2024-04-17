const addTodo = document.querySelector(".addTodo");
const addTodoInp = document.querySelector(".addTodoInp");
const todoBox = document.querySelector(".todoBox");
const box = document.querySelector(".box");
let deleteAllButton = null; 
const searchTodoInput = document.querySelector(".searchTodo");
const sortAZ= document.querySelector(".a-z")
const sortZA= document.querySelector(".z-a")


addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  createTode();
});

function createTode() {
    
 if(addTodoInp.value===""){
    alert("please enter a task")
    return
 }else{
    const todoItem = document.createElement("div");
    const todoText = document.createElement("p");
    const deletebtn = document.createElement("button");
    const editBtn= document.createElement("button")
    const creationTime = document.createElement("span")

  
    todoItem.className = "todoItem";
    todoText.className = "todoText";
    deletebtn.className = "delete";
    editBtn.className="edinBtn"
    creationTime.className = "creationTime";



    todoText.innerText = addTodoInp.value;
    deletebtn.innerText = "✖";
    editBtn.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'
    const currentTime = new Date();
    const timeString = `${currentTime.toLocaleDateString()} ${currentTime.toLocaleTimeString()}`;
    creationTime.innerText = `${timeString}`;

  
  
  
    todoItem.append(todoText, deletebtn, editBtn , creationTime);
    todoBox.appendChild(todoItem);
  

    addTodoInp.value = "";
  
    deletebtn.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  
    todoText.addEventListener("click", () => {
      todoText.classList.toggle("checked");
    });
    
  
   
    if (deleteAllButton) {
      deleteAllButton.remove();
    }
  
    deleteAllButton = document.createElement("button");
    deleteAllButton.className = "deleteAll";
    deleteAllButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  
  
    deleteAllButton.addEventListener("click", () => {
      todoBox.innerHTML = ""; 
      deleteAllButton.remove(); 
    });
  
    
    box.appendChild(deleteAllButton);


    editBtn.onclick= function(){
        let newTodo= prompt('edit todo')
        if(newTodo!=null){
            todoText.textContent=newTodo
        }
    }
    searchTodoInput.addEventListener("input", () => {
      filterTodos();
    });
    
    function filterTodos() {
      const searchTerm = searchTodoInput.value.toLowerCase();
      const todos = document.querySelectorAll(".todoItem");
    
      todos.forEach(todo => {
        const todoText = todo.querySelector(".todoText").innerText.toLowerCase();
        if (todoText.includes(searchTerm) || searchTerm === "") {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
      });
    }
    sortAZ.addEventListener("click", ()=>{
      sortTodos("asc");
    })
    sortZA.addEventListener("click", () => {
      sortTodos("desc");
    });

    function sortTodos(order) {
      const todos = document.querySelectorAll(".todoItem");
      const sortedTodos = Array.from(todos).sort((a, b) => {
        const textA = a.querySelector(".todoText").innerText.toLowerCase();
        const textB = b.querySelector(".todoText").innerText.toLowerCase();
        if (order === "asc") {
          return textA.localeCompare(textB);
        } else if (order === "desc") {
          return textB.localeCompare(textA);
        }
      });
    
      todoBox.innerHTML = ""; 
    
      sortedTodos.forEach(todo => {
        todoBox.appendChild(todo); 
      });
    }
    

 }
}
