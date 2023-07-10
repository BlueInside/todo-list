import format from "date-fns/format";
// if project is in localStorage load it form there
const projects = localStorage.getItem("projects")
  ? JSON.parse(localStorage.getItem("projects"))
  : {};
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
  localStorage.setItem("projects", JSON.stringify(projects));
}

function getList(project) {
  if (!(project in projects)) {
    projects[project] = [];
  }
  return projects[project];
}
//Added to remove project
function removeProject(project) {
  if (project in projects) {
    delete projects[project];
  }
  localStorage.setItem("projects", JSON.stringify(projects));
}
function checked(todo) {
  todo.checked = !todo.checked;
  localStorage.setItem("projects", JSON.stringify(projects));
}
function removeTodo(todo) {
  const projectArray = projects[todo.project];
  if (projectArray) {
    projects[todo.project] = projectArray.filter((t) => t.id !== todo.id);
  }
  localStorage.setItem("projects", JSON.stringify(projects));
}
console.log(projects);
export default Todo;
export { addToList, getList, removeTodo, removeProject, checked };
