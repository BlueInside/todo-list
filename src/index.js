import "normalize.css";
import "./styles/style.css";
import Todo, { addToList, getList, removeTodo, getProjects } from "./todo";
import { renderTodo, updateProjectButtons, war } from "./DomController";
import { getFormData } from "./dataManipulation";
import { format, compareAsc } from "date-fns";

const addTodoForm = document.querySelector("form");

addTodoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formDataAsArray = getFormData(new FormData(addTodoForm));

  const project = document.querySelector(".active").dataset.project;
  const todo = new Todo(project, ...formDataAsArray);
  console.log(todo);
  console.log(getList(todo.project));
  renderTodo(getList(todo.project));
});

updateProjectButtons();
