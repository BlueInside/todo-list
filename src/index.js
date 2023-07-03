import "normalize.css";
import "./styles/style.css";
import Todo from "./todo";
import { addTodo } from "./DomController";
import { getFormData } from "./dataManipulation";
import { format, compareAsc } from "date-fns";

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formDataAsArray = getFormData(new FormData(form));
  const todo = new Todo(...formDataAsArray);
  addTodo(todo);
});
const todo1 = new Todo("some title", "a description", "18/05/1997", "light");

const addTDBtn = document.querySelector(".addTDBtn");
addTDBtn.addEventListener("click", () => {
  addTodo(todo1);
});
