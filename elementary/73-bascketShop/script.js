let products = [
    {
      id: 1,
      name: "php",
      price: 12000,
    },
    {
      id: 2,
      name: "java script",
      price: 90000,
    },
    {
      id: 3,
      name: "c#",
      price: 99999,
    },
    {
      id: 4,
      name: "java",
      price: 88888,
    },
  ];
  
  let basket = [];
  let sumPriceBasket = 0;
  
  while (true) {
    let choice = prompt("choices (a = add or d = delete or x = exit)");
    if(choice=="a"){
      let nameProduct = prompt("enter name product");

      if (products.some((product) => product.name === nameProduct)) {
        basket.push(products.find((x) => x.name == nameProduct));
        console.log(basket);
        continue;
      }
      alert(nameProduct + " Not found in shop, sorry");
    }else if(choice=="d"){
      let nameProduct = prompt("enter name product");
      if (basket.some((product) => product.name === nameProduct)) {
        basket.pop(products.find((x) => x.name == nameProduct));
        console.log(basket);
        continue;
      }
      alert(nameProduct + " Not found in shop, sorry");
    }
    
    if (choice == "x") break;
  }
  
  basket.forEach((product) => {
    sumPriceBasket += product.price;
  });
  
  console.log(sumPriceBasket);
  