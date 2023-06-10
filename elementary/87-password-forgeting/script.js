let users = [
    {id:1,userName:"mehrdad",password:123456},
    {id:2,userName:"ali",password:1234564566},
    {id:3,userName:"reza",password:123455456},
];

console.log(users.find(user=>user.userName=="ali").password);