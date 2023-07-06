import Todo from "./todo";
const todo1 = new Todo("Example", "Example1", "2023/05/05", "important");
const todo2 = new Todo("Example", "Example1", "2023/05/05", "important");
const todo3 = new Todo("Example", "Example1", "2023/05/05", "important");
const todo4 = new Todo("Example", "Example1", "2023/05/05", "important");
const project1 = [todo1, todo2];
const project2 = [todo3, todo4];

export { project1, project2 };
