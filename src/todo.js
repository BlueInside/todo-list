import format from "date-fns/format";

let todoList = [];

function Todo(title, description, dueDate, priority) {
  const checked = false;
  dueDate = format(new Date(dueDate), "PP");
  const id = "id" + Math.random().toString(16).slice(2);
  function addToList() {
    todoList.push(this);
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
    { title, description, dueDate, priority, id, checked }
  );
}

function getTodoList() {
  return todoList;
}
export default Todo;
export { getTodoList };
