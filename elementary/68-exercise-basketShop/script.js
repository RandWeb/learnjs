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
  let nameProduct = prompt("enter name product, exit = enter x");
  if (nameProduct == "x") break;
  if (products.some((product) => product.name === nameProduct)) {
    basket.push(products.find((x) => x.name == nameProduct));
    console.log(basket);
    continue;
  }
  alert(nameProduct + " Not found in shop, sorry");
}

basket.forEach((product) => {
  sumPriceBasket += product.price;
});

console.log(sumPriceBasket);
