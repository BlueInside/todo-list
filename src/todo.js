import format from "date-fns/format";

let todoList = [];

function Todo(title, description, dueDate, priority) {
  dueDate = format(new Date(dueDate), "PP");
  const id = "id" + Math.random().toString(16).slice(2);
  function addToList() {
    todoList.push(this);
    console.log(this);
    console.log(todoList);
  }
  function getList() {
    return todoList;
  }
  function removeTodo() {
    todoList = todoList.filter((todo) => todo.id != this.id);
  }
  return Object.assign(
    {},
    { addToList, getList, removeTodo },
    { title, description, dueDate, priority, id }
  );
}

export default Todo;
export {};
