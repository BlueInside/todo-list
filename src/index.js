import "normalize.css";
import "./styles/style.css";
import Todo from "./todo";
import { addTodo } from "./DomController";
import { format, compareAsc } from "date-fns";

const todo1 = new Todo("some title", "a description", "18/05/1997", "light");

const addTDBtn = document.querySelector(".addTDBtn");
addTDBtn.addEventListener("click", () => {
  addTodo(todo1);
});
