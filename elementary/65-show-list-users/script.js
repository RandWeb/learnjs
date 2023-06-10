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
  
  users.forEach(user=>{
    console.log(
        user.id,
        user.firstName,
        user.lastName,
        user.age,
        user.email);
  })