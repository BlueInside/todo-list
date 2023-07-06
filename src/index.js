import "normalize.css";
import "./styles/style.css";
import Todo, { addTodo, getTodoList } from "./todo";
import { renderTodo } from "./DomController";
import { getFormData } from "./dataManipulation";
import { format, compareAsc } from "date-fns";
import * as projects from "./data";

const addTodoForm = document.querySelector("form");

addTodoForm.addEventListener("submit", function (e) {
  const formDataAsArray = getFormData(new FormData(addTodoForm));
  const todo = new Todo(...formDataAsArray);
  todo.addToList();
  renderTodo(getTodoList());
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
    console.log(projects[`${selectedProject}`]);
  });
});
