
let number1 = Number(prompt("enter your number 1 "));
let number2 = Number(prompt("enter your number 2"));
let operator = prompt("enter your operator");

switch(operator){
    case "+":
        console.log(number1 + number2);
        break;
    case "-":
        console.log(number1 - number2);
        break;
    case "/":
        console.log(number1 / number2);
        break;
    case "**":
        console.log(Math.pow(number1,number2));
        break;
}