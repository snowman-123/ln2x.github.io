const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input"); //사용자입력 string
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //json(key, todos)
}

function deleteToDo(event) {
  const li = event.target.parentElement; //li의 부모태그
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //클릭한 id만 지우기
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "❌";
  button.classList.add("button");
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) { //사용자입력창을 비우고 입력값 배열에 넣기
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = ""; 
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //local storage update
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

