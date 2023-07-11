import format from "date-fns/format";
// if project is in localStorage load it form there
const projects = localStorage.getItem("projects")
  ? JSON.parse(localStorage.getItem("projects"))
  : { Default: [] };

const checkProjectsBtn = document.getElementById("checkProjects");
checkProjectsBtn.addEventListener("click", () => {
  console.log(getProjects());
});
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
    return [];
  }
  return projects[project];
}
//Added to remove project
function removeProject(project) {
  if (project in projects) {
    delete projects[project];
  }
}
function getProjects() {
  return projects;
}
function removeTodo(todo) {
  const projectArray = projects[todo.project];
  if (projectArray) {
    projects[todo.project] = projectArray.filter((t) => t.id !== todo.id);
  }
}
function addProject(project) {
  projects[project] = [];
}
export default Todo;
export {
  addToList,
  getList,
  removeTodo,
  removeProject,
  getProjects,
  addProject,
};
