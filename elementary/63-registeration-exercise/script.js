let users = [
  {
    id: 1,
    firstName: "mehrdad",
    lastName: "tabesh",
    age: 27,
    email: "mehrdadit12@gmail.com",
  },
  {
    id: 2,
    firstName: "ali",
    lastName: "panahi",
    age: 26,
    email: "mehrdadit12@gmail.com",
  },
  {
    id: 3,
    firstName: "yasin",
    lastName: "fallahi",
    age: 29,
    email: "admin@gmail.com",
  },
];

let firstName, lastName, age, email;

while (true) {
  firstName = prompt("Enter your firstName");
  if (3 > firstName.length || firstName.length > 10) continue;
  break;
}
while (true) {
  lastName = prompt("Enter your lastName");
  if (2 > firstName.length || firstName.length > 16) continue;
  break;
}
while (true) {
  age = Number(prompt("Enter your age"));
  if (isNaN(age)) continue;
  break;
}
email = prompt("Enter your email");

let newUser = {
  id: users.length + 1,
  firstName: firstName,
  lastName: lastName,
  age: age,
  email: email,
};

users.push(newUser);

console.log(users);
