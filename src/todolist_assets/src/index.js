import { todolist } from "../../declarations/todolist";

const todoListCount = document.getElementById('todoListCount');
const todoListSection = document.getElementById('todoList');
const completeListCount = document.getElementById('completeListCount');
const completeListSection = document.getElementById('completeList');
const todoContent = document.getElementById('todoContent');
const priority = document.getElementById('priority');
const addButton = document.getElementById('addButton');

addButton.addEventListener('click', async (e)=>{
  e.preventDefault();
  const content = todoContent.value.toString();
  if (content == "") location.reload();
  if (priority.value != "1" || priority.value != "2" || priority.value != "3") location.reload();
  const p = parseInt(priority.value)
  let res = await todolist.addTodo(content, p);
  location.reload();
});

const readList = async () => {
  console.log('get readList...')
  let todoListSize = await todolist.getTodoListSize();
  let todoList = await todolist.getTodoList();
  todoListCount.innerHTML = todoListSize;
  todoListSection.innerHTML = "";
  todoList.map((item, _) => {
    console.log(item);
    todoListSection.innerHTML += "<div>";
    todoListSection.innerHTML += '<h3>'+item.content.toString()+'<h3>';
    todoListSection.innerHTML += '<button type="button" id="todoComplete" value="'+ item.id +'">完成</button>';
    todoListSection.innerHTML += '<button type="button" id="deleteButton">删除</button>';
    todoListSection.innerHTML += "</div>";
  });


  let completeListSize = await todolist.getCompleteListSize();
  let completeList = await todolist.getCompleteList();
  completeListCount.innerHTML = completeListSize;
  completeListSection.innerHTML = "";
  completeList.map((item, _) => {
    console.log(item);
    completeListSection.innerHTML += "<div>";
    completeListSection.innerHTML += '<h3>'+item.content.toString()+'<h3>';
    completeListSection.innerHTML += '<button type="button">取消完成</button>';
    completeListSection.innerHTML += '<button type="button">删除</button>';
    completeListSection.innerHTML += "</div>";
  });

}

window.onload = readList

const deleteButton = document.getElementById('deleteButton');
const todoComplete = document.getElementById('todoComplete');

deleteButton.addEventListener('click', async (e)=>{
  e.preventDefault();
  console.log('delete...')
});

todoComplete.addEventListener('click', async(e)=>{
  e.preventDefault();
  console.log('complete...')
});


document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");

  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);

  // Interact with foo actor, calling the greet method
  const greeting = await todolist.greet(name);

  button.removeAttribute("disabled");

  document.getElementById("greeting").innerText = greeting;

  return false;
});
