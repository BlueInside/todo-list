//Show/Hide form
import {
  addToList,
  getList,
  removeTodo,
  removeProject,
  addProject,
} from "./todo.js";
import { getFormData } from "./dataManipulation";
import format from "date-fns/format";

const showFormButton = document.getElementById("addTDFormButton");
const formContainer = document.getElementById("form-container");
const container = document.querySelector(".container");
const hideForm = document.getElementById("closeFormBtn");
hideForm.addEventListener("click", closeForm);
const projectsContainer = document.querySelector(".project-tabs");
const createProjectForm = document.getElementById("createProjectForm");
createProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
//Delete current project
const deleteProject = document.getElementById("deleteCurrentProject");
deleteProject.addEventListener("click", popup);

function popup() {
  const project = document.querySelector(".active");

  const popupContainer = document.querySelector(".popup-container");
  const saveButton = document.getElementById("saveButton");
  const cancelButton = document.getElementById("cancelButton");
  if (project) {
    popupContainer.classList.remove("hidden");
    saveButton.addEventListener("click", saveProjectChanges);
    cancelButton.addEventListener("click", closePopup);
  } else {
    displayWarningPopup("Choose project first");
  }
}
//New Project Form And Buttons
const newProjectForm = document.getElementById("createProjectContainer");

const newProjectBtn = document.getElementById("addNewProject");
newProjectBtn.addEventListener("click", () => {
  newProjectForm.classList.remove("hidden");
});

const closeNewProjectBtn = document.querySelector(".closeProjectForm");
closeNewProjectBtn.addEventListener("click", closeProjectForm);

const saveNewProjectButton = document.getElementById("newProjectBtn");
saveNewProjectButton.addEventListener("click", () => {
  const input = document.getElementById("project");
  const value = document.getElementById("project").value;
  if (value === "80085") displayWarningPopup(":) see what you did there");
  if (value !== "") {
    const newProjectButton = document.createElement("Button");
    newProjectButton.innerText = `${value}`;
    newProjectButton.classList.add("tab-button");
    newProjectButton.dataset.project = value;
    projectsContainer.appendChild(newProjectButton);
    updateProjectButtons();
    closeProjectForm();
    addProject(value);
  } else {
    displayWarningPopup("Project name can't be empty");
  }
  input.value = "";
});

showFormButton.addEventListener("click", (e) => {
  const project = document.querySelector(".active");
  if (!project) {
    displayWarningPopup("Choose project first");
  } else {
    document.querySelector('input[type="date"]').valueAsDate = new Date();
    formContainer.classList.remove("hidden");
  }
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

  element.classList.add("checked");
  if (!todo.checked) element.classList.remove("checked");
  const doneTodo = document.createElement("button");
  doneTodo.innerText = "Done";
  doneTodo.addEventListener("click", () => {
    todo.checked = !todo.checked;
    renderTodo(getList(todo.project));
  });

  editBtn.innerText = "Edit";
  editBtn.addEventListener("click", createEditForm.bind(todo));

  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("deleteTodoBtn");
  deleteBtn.addEventListener("click", () => {
    removeTodo(todo);
    //refresh todo's display
    renderTodo(getList(todo.project));
  });

  const todoButtons = document.createElement("div");
  todoButtons.classList.add("todoButtons");
  todoButtons.append(editBtn, doneTodo, deleteBtn);
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

  const saveEditFormBtn = createEditFormButtons();

  const date = document.querySelector(`.${this.id}`);
  date.valueAsDate = new Date();
  //save update todo's array and render it again

  saveEditFormBtn.addEventListener("click", (e) => {
    e.preventDefault();
    (this.title = `${titleInput.value ? titleInput.value : "No Title"}`),
      (this.description = `${
        descInput.value ? descInput.value : "No Description"
      }`),
      (this.dueDate = format(new Date(dueToInput.value), "PP")),
      (this.priority = select.value),
      renderTodo(getList(this.project)),
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
  const doneEditFormBtn = document.createElement("button");
  doneEditFormBtn.value = "Done";
  container.append(saveEditFormBtn, cancelEditFormBtn);

  return saveEditFormBtn;
}
function hideEditForm() {
  const container = document.getElementById("editFormContainer");
  container.classList.add("hidden");
}
function closeProjectForm() {
  newProjectForm.classList.add("hidden");
}

function updateProjectButtons() {
  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((button) =>
    button.removeEventListener("click", handleTabButtonClick)
  );
  tabButtons.forEach((button) => {
    button.addEventListener("click", handleTabButtonClick);
  });
  function handleTabButtonClick() {
    tabButtons.forEach((tab) => tab.classList.remove("active"));
    this.classList.add("active");
    const selectedProject = this.dataset.project;
    updateTodoContainer(selectedProject);
  }
}
function updateTodoContainer(project) {
  const todos = getList(project);
  renderTodo(todos);
}
function displayWarningPopup(message) {
  const warningContainer = document.querySelector(".popup-warning-container");
  warningContainer.classList.remove("hidden");
  const displayMessage = document.getElementById("popupWarningMessage");
  displayMessage.innerText = message;
  const confirmButton = document.getElementById("confirmWarningButton");
  confirmButton.addEventListener("click", hideWarningPopup);
}
function hideWarningPopup() {
  const warningContainer = document.querySelector(".popup-warning-container");
  warningContainer.classList.add("hidden");
}
function saveProjectChanges() {
  const elementToDelete = document.querySelector(".active");
  const project = elementToDelete.dataset.project;
  if (project !== "default") {
    removeProject(project);
    elementToDelete.remove();
    updateTodoContainer(project);
    closePopup();
  } else {
    closePopup();
    displayWarningPopup("Can't delete 'default' project");
  }
}

function closePopup() {
  const popupContainer = document.querySelector(".popup-container");
  popupContainer.classList.add("hidden");
}

export { addTodoToHTML, renderTodo, updateProjectButtons, displayWarningPopup };
const btn = document.getElementById("addTDFormButton");
