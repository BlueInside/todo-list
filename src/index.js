import "normalize.css";
import "./styles/style.css";
import Todo, { addTodo, getTodoList } from "./todo";
import { renderTodo } from "./DomController";
import { getFormData } from "./dataManipulation";
import { format, compareAsc } from "date-fns";

const addTodoForm = document.querySelector("form");

addTodoForm.addEventListener("submit", function (e) {
  const formDataAsArray = getFormData(new FormData(addTodoForm));
  const todo = new Todo(...formDataAsArray);
  todo.addToList();
  renderTodo(getTodoList());
});
