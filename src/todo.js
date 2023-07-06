import format from "date-fns/format";

let todoList = [];

//finished here trying to make project load objects on click at tab
function Todo(title, description, dueDate, priority) {
  const checked = false;
  if (!list) list = todoList;
  dueDate = format(new Date(dueDate), "PP");
  const id = "id" + Math.random().toString(16).slice(2);
  function addToList() {
    list.push(this);
  }
  function getList() {
    return list;
  }
  function removeTodo() {
    list = list.filter((todo) => todo.id != this.id);
  }
  return Object.assign(
    {},
    { addToList, getList, removeTodo },
    { title, description, dueDate, priority, id, checked }
  );
}

function getTodoList() {
  return list;
}
export default Todo;
export { getTodoList };
