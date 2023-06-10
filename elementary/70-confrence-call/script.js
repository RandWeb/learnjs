let users = [
    {
        id:1,
        name:"ali",
        age:19
    },
    {
        id:2,
        name:"mehrdad",
        age:23
    },
    {
        id:3,
        name:"alireza",
        age:33
    },
    {
        id:4,
        name:"erfan",
        age:23
    },
    {
        id:5,
        name:"sajjad",
        age:16
    },
    {
        id:6,
        name:"yasin",
        age:30
    }
];

let isAll = users.every(user=>user.age>16);

if(isAll){
    console.log("calling")
}else{
    console.log("you can't");
}