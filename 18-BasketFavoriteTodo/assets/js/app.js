const addTodo = document.querySelector(".addTodo");
const addTodoInp = document.querySelector(".addTodoInp");
const todoBox = document.querySelector(".todoBox");
const box = document.querySelector(".box");
let deleteAllButton = null; 
let sortBy = null; 


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
    
    const sortZA=document.createElement("button")

  
    todoItem.className = "todoItem";
    todoText.className = "todoText";
    deletebtn.className = "delete";
    editBtn.className="edinBtn"
    sortAZ.className="a-z"
    sortZA.className="z-a"



    todoText.innerText = addTodoInp.value;
    deletebtn.innerText = "✖";
    editBtn.innerHTML='<i class="fa-solid fa-pen-to-square"></i>'
    sortAZ.innerText="A-Z"
    sortZA.innerText="Z-A"

  
  
  
    todoItem.append(todoText, deletebtn, editBtn);
    todoBox.appendChild(todoItem);
    box.append(sortAZ ,sortZA)

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
    const sortAZ=document.createElement("button")

 }
}
