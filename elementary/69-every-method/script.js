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

users.forEach((user) => {
  console.log(user.id, user.firstName, user.lastName, user.age, user.email);
});

// شرط را برای همه عنصر های یک آرایه بررسی می کند

//  اگر تنها یک عنصر شرط را راضی نکند، فالس برمی گراند
// با اولین عنصری که شر را اضی نکندکارش تمام می شود
let output1 = users.every((user) => user.age > 26); //output false
let output2 = users.every((user) => user.age > 25); //output true

console.log(output1, output2);

function isOdd(element, index, array) {
  console.log(element, index, array);
  return element % 2 == 1;
}

let arrayNumbers = [3, 4, 1, 8, 7];

console.log(arrayNumbers.every(isOdd));
