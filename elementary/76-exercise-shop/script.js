let basketShop = [
  {
    id: 1,
    name: "php",
    price: 12000,
  },
  {
    id: 2,
    name: "java script",
    price: 200,
  },
  {
    id: 3,
    name: "c#",
    price: 160,
  },
  {
    id: 4,
    name: "java",
    price: 150,
  },
  {
    id: 5,
    name: "go",
    price: 80,
  },
  {
    id: 6,
    name: "ruby",
    price: 20,
  },
];
let sumPriceBasket = 0,
  calculatePricePost = 0;

basketShop.forEach((product) => (sumPriceBasket += product.price));

calculatePricePost = basketShop.filter((product) => product.price < 100).length * 1000;

console.log("post =" + calculatePricePost + ", sumPrice = " + sumPriceBasket);
