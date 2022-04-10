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
  await todolist.addTodo(content, p);
//location.reload();
});

const readList = async () => {
  console.log('get readList...')
  let todoListSize = await todolist.getTodoListSize();
  let todoList = await todolist.getTodoList();
  todoListCount.innerHTML = "一共有 " + todoListSize.toString() + " 条事项";
  todoListSection.innerHTML = "";
  todoList.map((item, _) => {
    console.log(item);

    var div = document.createElement("div"); //创建需要添加的元素节点
    div.id = "todoItem";
    var p = document.createElement("p");
    if (item.priority == 2) {
      p.innerHTML = "🟥 " + item.content.toString();
    } else if (item.priority == 1){
      p.innerHTML = "🟧 " + item.content.toString();
    } else {
      p.innerHTML = "🟩 " + item.content.toString();
    }

    var todoCompleteButton = document.createElement("button");
    todoCompleteButton.type = "button";
    todoCompleteButton.id = "todoComplete";
    todoCompleteButton.value = item.id.toString();
    todoCompleteButton.innerHTML = "完成"

    var deleteButton = document.createElement("button");
    deleteButton.type = "button"
    deleteButton.id = "deleteButton";
    deleteButton.value = item.id.toString();
    deleteButton.innerHTML = "删除";

    div.appendChild(p);
    div.appendChild(todoCompleteButton);
    div.appendChild(deleteButton);
    todoListSection.appendChild(div);
  });



  let completeListSize = await todolist.getCompleteListSize();
  let completeList = await todolist.getCompleteList();
  completeListCount.innerHTML = "已完成 " + completeListSize + " 条事项";;
  completeListSection.innerHTML = "";
  completeList.map((item, _) => {
    console.log(item);
    var div = document.createElement("div"); //创建需要添加的元素节点
    div.id = "todoItem";
    var p = document.createElement("p");
    p.innerHTML = "☑️ " + item.content.toString();

    var delCompleteButton = document.createElement("button");
    delCompleteButton.type = "button";
    delCompleteButton.id = "delCompleteButton";
    delCompleteButton.value = item.id.toString();
    delCompleteButton.innerHTML = "取消完成"

    var deleteButton = document.createElement("button");
    deleteButton.type = "button"
    deleteButton.id = "deleteButton";
    deleteButton.value = item.id.toString();
    deleteButton.innerHTML = "删除";

    div.appendChild(p);
    div.appendChild(delCompleteButton);
    div.appendChild(deleteButton);
    completeListSection.appendChild(div);
  });


document.querySelectorAll("#todoComplete").forEach((node) => {
  node.addEventListener('click', ()=>{
    console.log('todoComplete click');
    console.log(event.target.value);
    todolist.complete(event.target.value);
  })
});

document.querySelectorAll("#delCompleteButton").forEach((node) => {
  node.addEventListener('click', ()=>{
    console.log('delCompleteButton click');
    console.log(event.target.value);
    todolist.delComplete(event.target.value);
  })
});

document.querySelectorAll("#deleteButton").forEach((node) => {
  node.addEventListener('click', ()=>{
    console.log('deleteButton click!');
    console.log(event.target.value);
    todolist.delete(event.target.value);
  })
});
}

window.onload = readList