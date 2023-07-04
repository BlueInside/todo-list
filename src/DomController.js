//Show/Hide form
const showFormButton = document.getElementById("addTDFormButton");
const formContainer = document.getElementById("form-container");
const container = document.querySelector(".container");
const hideForm = document.getElementById("closeFormBtn");

hideForm.addEventListener("click", closeForm);

showFormButton.addEventListener("click", (e) => {
  document.querySelector('input[type="date"]').valueAsDate = new Date();
  formContainer.classList.remove("hidden");
});

function closeForm() {
  formContainer.classList.add("hidden");
}

//add new todo to list
let div = document.createElement("div");
let span = document.createElement("span");
let span2 = document.createElement("span");
const display = document.getElementById("display");

function addTodoToHTML(todo) {
  const element = document.createElement("div");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");

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

  editBtn.innerText = "Edit";
  editBtn.addEventListener("click", displayEditForm.bind(todo));
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("deleteTodoBtn");
  deleteBtn.addEventListener("click", () => {
    todo.removeTodo();
    //refresh todo's display
    renderTodo(todo.getList());
  });
  element.append(editBtn, deleteBtn);
  element.dataset.id = todo.id;
  display.appendChild(element);
  resetForm("addTodoForm");
  closeForm();
}

function renderTodo(todoArray) {
  display.textContent = "";
  todoArray.forEach((todo) => {
    addTodoToHTML(todo);
  });
}

function cleanTodoItem() {
  span = document.createElement("span");
  span2 = document.createElement("span");
  div = document.createElement("div");
  div.classList.add("todo-item");
}

function resetForm(idSelector) {
  const form = document.getElementById(idSelector);
  form.reset();
}

function displayEditForm() {
  // FINISHED HERE IMPLEMENT EDIT FUNCTIONALITY
  // INPUTS SHOW NEED TO BE STYLED, AND ON SUBMIT CHANGED TODO OBJECT
  // THEN RENDER OVER ARRAY WITH EDITED OBJECT
  const container = document.getElementById("editFormContainer");
  const editForm = document.querySelector(".editFormDisplay");
  container.classList.remove("hidden");
  editForm.innerText = "";
  const titleInput = document.createElement("input");
  const descInput = document.createElement("input");
  const dueToInput = document.createElement("input");
  dueToInput.type = "date";
  const select = document.createElement("select");
  let newOption = new Option("Irrelevant", "irrelevant");
  select.add(newOption, undefined);
  newOption = new Option("Important", "important");
  select.add(newOption, undefined);
  titleInput.value = this.title;
  descInput.value = this.description;
  editForm.append(titleInput, descInput, dueToInput, select);
}
//Hide edit form on Button "cancel" click
const hideEditFormBtn = document.getElementById("hideEditForm");
hideEditFormBtn.addEventListener("click", () => {
  const container = document.getElementById("editFormContainer");
  container.classList.add("hidden");
});

export { addTodoToHTML, renderTodo };
const btn = document.getElementById("addTDFormButton");
