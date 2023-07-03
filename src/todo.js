import format from "date-fns/format";

export default function Todo(title, description, dueDate, priority) {
  dueDate = format(new Date(dueDate), "PP");

  return { title, description, dueDate, priority };
}
