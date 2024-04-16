let acc = document.querySelectorAll(".accordion");

acc.forEach(function (e) {
  e.addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    let iconPlus = this.querySelector(".fa-plus");
    let iconMinus = this.querySelector(".fa-minus");
    if (panel.style.display === "block") {
      panel.style.display = "none";
      iconPlus.classList.remove("d-none");
      iconMinus.classList.add("d-none");
    } else {
      panel.style.display = "block";
      iconPlus.classList.add("d-none");
      iconMinus.classList.remove("d-none");
    }
  });
});

let api = [
  {
    id: 1,
    todo: "breakfast",
  },
  {
    id: 2,
    todo: "school",
  },
  {
    id: 2,
    todo: "gym",
  },
  {
    id: 2,
    todo: "tasks",
  },
];
const taskInput =document.querySelector(".task-input")
const taskForm = document.querySelector(".task-form")
const taskList = document.querySelector(".task-list")
const deleteAll = document.querySelector(".delete");
taskForm.addEventListener("submit", (e)=>{
  e.preventDefault()
  // console.log(taskTitle);
 
console.log(api);
let obj={
  id: api.length+1,
  todo: taskInput.value
}
api.push(obj)
taskList.innerHTML=""
  ToDoList()

  taskInput.value=""
})
ToDoList()
function ToDoList(){
  api.forEach((element) => {
  const taskTitle= taskInput.value;
    const listItem= document.createElement('li')
    listItem.innerHTML=taskTitle
    listItem.textContent = element.todo;
    taskList.append(listItem)
    let span= document.createElement("span")
    span.innerHTML='&times;'
    const updateButton = document.createElement("button");
    updateButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    updateButton.classList.add("update-task");
    listItem.append(updateButton);

    listItem.appendChild(span)
    taskInput.value=""
  
}
  )}
taskList.addEventListener("click", (e)=>{
  if(e.target.tagName=="LI"){
    e.target.classList.toggle("checked")
  }
  if(e.target.tagName=='SPAN'){
    const li =e.target.parentElement
    li.remove()
  }
  
})
deleteAll.addEventListener("click", () => {
  taskList.innerHTML = "";
});

let updateButtons = document.querySelectorAll(".update-task");
  updateButtons.forEach(button => {
    button.addEventListener("click", (e) => {
     console.log(e.target);
    });
  });
