import "normalize.css";
import "./styles/style.css";
import Todo, { addTodo } from "./todo";
import { addTodoToHTML, renderTodo } from "./DomController";
import { getFormData } from "./dataManipulation";
import { format, compareAsc } from "date-fns";

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  const formDataAsArray = getFormData(new FormData(form));
  const todo = new Todo(...formDataAsArray);
  todo.addToList();
  //   addTodoToHTML(todo);
  renderTodo(todo.getList());
});
