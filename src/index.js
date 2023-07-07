import "normalize.css";
import "./styles/style.css";
import Todo, { addToList, getList, removeTodo } from "./todo";
import { renderTodo, updateProjectButtons } from "./DomController";
import { getFormData } from "./dataManipulation";
import { format, compareAsc } from "date-fns";

const addTodoForm = document.querySelector("form");

addTodoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formDataAsArray = getFormData(new FormData(addTodoForm));
  const project = document.querySelector(".active").dataset.project;
  if (!project) {
    console.log("no project selected");
  } else {
    const todo = new Todo(project, ...formDataAsArray);
    console.log(todo);
    console.log(getList(todo));
    renderTodo(getList(todo.project));
  }
});

updateProjectButtons();
