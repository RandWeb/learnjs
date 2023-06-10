let tasks = {
    "mehrdad":["java","c#"],
    "yasin":["html","css"],
    "ali":["vue","react"],
}

let user = prompt("enter your uasr: ")
let taskName = prompt("enter your task: ")

tasks[user].push(taskName);

console.log(tasks);