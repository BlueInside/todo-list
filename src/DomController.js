//Show/Hide form
import { getFormData } from "./dataManipulation";
import format from "date-fns/format";

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
  editBtn.addEventListener("click", createEditForm.bind(todo));

  // FINISHED HERE!!!
  // IMPLEMENT CHECKED TODO FUNCTION WHEN CLICKED
  // ADD STYLING TO WHOLE ELEMENT .CHECKED
  // probably will have to add additional property to todo
  // elements checked and when pressed add checked styling to
  // element and render again.

  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("deleteTodoBtn");
  deleteBtn.addEventListener("click", () => {
    todo.removeTodo();
    //refresh todo's display
    renderTodo(todo.getList());
  });
  const todoButtons = document.createElement("div");
  todoButtons.classList.add("todoButtons");
  todoButtons.append(editBtn, deleteBtn);
  element.appendChild(todoButtons);
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

function createEditForm() {
  const container = document.getElementById("editFormContainer");
  const editFormDisplay = document.querySelector(".editFormDisplay");
  container.classList.remove("hidden");
  editFormDisplay.innerText = "";

  const titleInput = document.createElement("input");
  const descInput = document.createElement("input");
  const dueToInput = document.createElement("input");
  dueToInput.type = "date";
  dueToInput.classList.add(`${this.id}`);
  const select = document.createElement("select");
  let newOption = new Option("Irrelevant", "irrelevant");
  select.add(newOption, undefined);
  newOption = new Option("Important", "important");
  select.add(newOption, undefined);

  titleInput.value = this.title;
  descInput.value = this.description;
  editFormDisplay.append(titleInput, descInput, dueToInput, select);

  const saveEditFormButton = createEditFormButtons();
  const date = document.querySelector(`.${this.id}`);
  date.valueAsDate = new Date();
  //save update todo's array and render it again
  saveEditFormButton.addEventListener("click", (e) => {
    e.preventDefault();
    (this.title = `${titleInput.value ? titleInput.value : "No Title"}`),
      (this.description = `${
        descInput.value ? descInput.value : "No Description"
      }`),
      (this.dueDate = format(new Date(dueToInput.value), "PP")),
      (this.priority = select.value),
      renderTodo(this.getList()),
      hideEditForm();
  });
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
  return saveEditFormBtn;
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
