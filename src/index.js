import "normalize.css";
import "./styles/style.css";
import Todo, { addToList, getList, removeTodo } from "./todo";
import { renderTodo } from "./DomController";
import { getFormData } from "./dataManipulation";
import { format, compareAsc } from "date-fns";

const addTodoForm = document.querySelector("form");

addTodoForm.addEventListener("submit", function (e) {
  const formDataAsArray = getFormData(new FormData(addTodoForm));
  const project = document.querySelector(".active").dataset.project;
  const todo = new Todo(project, ...formDataAsArray);
  // addToList(todo);
  console.log(getList(todo.project));
  renderTodo(getList(todo.project));
});

const tabButtons = document.querySelectorAll(".tab-button");
const taskContainer = document.getElementById("display");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((tab) => tab.classList.remove("active"));

    button.classList.add("active");
    const selectedProject = button.dataset.project;
    console.log(selectedProject);
    // Update the task container based on the selected project
    updateTodoContainer(selectedProject);
  });
});

function updateTodoContainer(project) {
  const todos = getList(project);
  console.log(todos);
}
