import format from "date-fns/format";
const projects = {};
function Todo(project, title, description, dueDate, priority) {
  const todo = {
    project,
    title,
    description,
    dueDate: format(new Date(dueDate), "PP"),
    priority,
    checked: false,
    id: "id" + Math.random().toString(16).slice(2),
  };

  addToList(todo);
  return todo;
}
function addToList(todo) {
  const { project } = todo;
  if (!(project in projects)) {
    projects[project] = [];
  }
  projects[project].push(todo);
}

function getList(project) {
  if (!(project in projects)) {
    projects[project] = [];
  }
  return projects[project];
}
function removeTodo(todo) {
  const projectArray = projects[todo.project];
  if (projectArray) {
    projects[todo.project] = projectArray.filter((t) => t.id !== todo.id);
  }
}

export default Todo;
export { addToList, getList, removeTodo };
