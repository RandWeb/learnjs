let input = " mehrdad";
//let input = "dad ";
 //input = input.trimStart();
 //input = input.trimEnd();
 input = input.trim();
let reverseInpput = input.split("").reverse().join("");

let outPut = (input == reverseInpput);
console.log(input + " is palindrom = " + outPut);
