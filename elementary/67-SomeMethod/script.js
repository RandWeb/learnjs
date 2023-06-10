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

 let user =  {
    id: 1,
    firstName: "mehrdad",
    lastName: "tabesh",
    age: 27,
    email: "mehrdadit12@gmail.com",
  }
  //includes input : bool,string,number
console.log("includes",users.includes(user)) //output false

// users.forEach(user => {
//     //iterate all elements
//     console.log(user);
// });
// اولین عنصری که شرط را راضی کند باعث توقف بررسی بقیه المان هامی شود
// array.some(function(currentElement,index,arr));

console.log(users.some((user)=> user.firstName=="mehrdad"));

function isOdd(element,index,array){
  console.log(element,index,array);
    return (element % 2 == 1);
}

let arrayNumbers = [6,4,1,8,7];

console.log(arrayNumbers.some(isOdd));