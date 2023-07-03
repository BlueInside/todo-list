// today date IN form date
document.querySelector('input[type="date"]').valueAsDate = new Date();

let div = document.createElement("div");
let span = document.createElement("span");
let span2 = document.createElement("span");

function addTodo(todo) {
  const display = document.getElementById("display");
  const element = document.createElement("div");
  const button = document.createElement("button");
  const button2 = document.createElement("button");

  element.classList.add("todo");
  div.classList.add("todo-item");

  //start with title
  span.innerText = `Title:`;
  span2.innerText = `${todo.title}`;
  div.append(span, span2);
  element.appendChild(div);
  cleanTodoItem();
  //description
  span.innerText = `Description:`;
  span2.innerText = `${todo.description}`;
  div.append(span, span2);
  element.appendChild(div);
  cleanTodoItem();
  //date
  span.innerText = `Due To:`;
  span2.innerText = `${todo.dueDate}`;
  div.append(span, span2);
  element.appendChild(div);
  cleanTodoItem();
  //priority
  span.innerText = `Priority:`;
  span2.innerText = `${todo.priority}`;
  div.append(span, span2);
  element.appendChild(div);
  cleanTodoItem();

  button.innerText = "Edit";
  button2.innerText = "Delete";
  element.append(button, button2);
  display.appendChild(element);
  resetForm();
}

function cleanTodoItem() {
  span = document.createElement("span");
  span2 = document.createElement("span");
  div = document.createElement("div");
  div.classList.add("todo-item");
}

function resetForm(selector) {
  const form = document.getElementById("add-todo");
  form.reset();
}
export { addTodo };
