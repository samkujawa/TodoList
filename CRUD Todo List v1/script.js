let todos = [];
const todosList = document.getElementById("todos");
const todoInput = document.getElementById("textInput");
const inputButton = document.getElementById("add");
const showEnterTodo = document.getElementById("showEnterTodo");
const enterTodo = document.getElementById("enterTodo");

function showTodoInput() {
  enterTodo.style.display = "block";
}

showEnterTodo.addEventListener("click", showTodoInput);

function addTodo(e) {
  e.preventDefault();
  let textValue = todoInput.value;
  if (textValue === "") return; // Prevent adding empty todos
  todos.push(textValue);
  todosList.innerHTML = "";
  renderTodos();
  todoInput.value = "";
  enterTodo.style.display = "none";
}
inputButton.addEventListener("click", addTodo);

function removeTodo(idx) {
  todos = todos.filter((todo, i) => {
    return i == idx ? false : true;
  });
  todosList.innerHTML = "";
  renderTodos();
}

function editTodo(idx) {
  const currElementText = document.querySelector(
    `#todos div:nth-child(${idx + 1})`
  ).innerText;
  const splicedText = currElementText.slice(3);
  removeTodo(idx);
  showTodoInput();
  todoInput.value = splicedText;
}

function renderTodos() {
  todos.forEach((todo, i) => {
    let currentHTML = todosList.innerHTML;
    let newHTML = `<div class="todoItem">
                    <p>${i + 1}. ${todo}</p>
                    <div class="actions">
                        <i onclick="editTodo(${i})" class="fa-solid fa-pencil"></i>
                        <i onclick="removeTodo(${i})" class="fa-solid fa-trash-can"></i>
                    </div>
                </div>`;
    let amendedHTML = currentHTML + newHTML;
    todosList.innerHTML = amendedHTML;
  });
}
renderTodos();
