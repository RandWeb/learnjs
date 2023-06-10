const state = ["done", "progresing", "default"];
let tasks = [
  { id: 1, name: "buy milk", state: 0 },
  { id: 2, name: "shot down tv", state: 2 },
  { id: 3, name: "reading js", state: 1 },
];
let id = 3;

let menu = "add = a, delete = d, change state = c, exit = x";
while (true) {
  let choice = prompt(menu);
  if (choice === "x") break;
  if (choice === "a") addTodo();
  else if (choice === "d") deleteTodo();
  else if (choice === "c") ChangeStateTodo();
  console.log(tasks);
}

function addTodo() {
  id++;
  let name = prompt("please enter name ...");
  let todo = {
    id: id,
    name: name,
    state: 2,
  };
  tasks.push(todo);
}

function deleteTodo() {
  let name = prompt("please enter name ...");
  tasks = tasks.filter((task) => task.name !== name.trim());
}

function ChangeStateTodo() {
  let name = prompt("please enter name ...");
  let index = tasks.findIndex((task) => task.name === name.trim());
  tasks[index].state = 1;
}
