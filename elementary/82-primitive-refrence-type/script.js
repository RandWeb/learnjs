
/********primitives*******/
//String
//Number
//Undefined
//Null
//Symbol
//BigInt
//Boolean

/*******reference*******/
//Array
//Object
//Function


/* primitive */
let num1 = 10;
let num2 = num1;
num2 = 20;

console.log("num1",num1)
console.log("num2",num2)

/* reference */
let userNames1 = ["ali","mehrdad"];
let userNames2 = userNames1;

userNames2.push("yasin");
console.log("userNames1",userNames1);
console.log("userNames2",userNames2);

let product = {
    id:1,
    title:"test",
    price:1235,
}

let newProduct =  product;
newProduct.title = "mobile";

console.log("product ",product);
console.log("newproduct ",newProduct);