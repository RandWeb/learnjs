let users = [
{id:1,name:"mehrdad",age:26},
{id:2,name:"ali",age:29},
{id:3,name:"rez",age:16},
];

let user = users.find(user=>user.name == "mehrdad");
console.log(user);