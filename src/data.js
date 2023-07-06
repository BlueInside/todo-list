import { addTodoToHTML, renderTodo } from "./DomController.js";
import Todo from "./todo.js";
const todo1 = new Todo("Example1", "Example", "Jul 6, 2023", "irrevelant");
const todo2 = new Todo("Example2", "Example", "Jul 6, 2023", "irrevelant");
const todo3 = new Todo("Example3", "Example", "Jul 6, 2023", "irrevelant");
const todo4 = new Todo("Example4", "Example", "Jul 6, 2023", "irrevelant");
const project1 = [todo1, todo2];
const project2 = [todo3, todo4];

export { project1, project2 };
