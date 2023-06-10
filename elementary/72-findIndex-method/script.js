let users = [
  {
    id: 1,
    name: "ali",
  },
  {
    id: 2,
    name: "yasin",
  },
  {
    id: 3,
    name: "fardin",
  },
];

let userIndex = users.findIndex((x) => {
  console.log(x);
  return (x.id == 3);
});
console.log(userIndex);
