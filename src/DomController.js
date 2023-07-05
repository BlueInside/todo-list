//Show/Hide form
import { getFormData } from "./dataManipulation";
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

  createEditFormButtons();

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
  const container = document.getElementById("editFormContainer");
  const editFormDisplay = document.querySelector(".editFormDisplay");
  container.classList.remove("hidden");
  editFormDisplay.innerText = "";
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
  editFormDisplay.append(titleInput, descInput, dueToInput, select);
}
function createEditFormButtons() {
  const container = document.querySelector(".editFormButtons");
  container.innerText = "";
  const saveEditFormBtn = document.createElement("input");
  const cancelEditFormBtn = document.createElement("input");
  cancelEditFormBtn.type = "button";
  cancelEditFormBtn.id = "hideEditForm";
  cancelEditFormBtn.value = "Cancel";
  cancelEditFormBtn.addEventListener("click", hideEditForm);
  saveEditFormBtn.type = "submit";
  saveEditFormBtn.value = "Save";
  container.append(saveEditFormBtn, cancelEditFormBtn);
}
function hideEditForm() {
  const container = document.getElementById("editFormContainer");
  container.classList.add("hidden");
}

// // IMPLEMENT SAVE LOGIC IN EDIT FORM
//Form console logs multiple this values depending on todo amount
//I think its cause only one submit button that fires multiple
// events try to create submit button dynamically in JS.

export { addTodoToHTML, renderTodo };
const btn = document.getElementById("addTDFormButton");
