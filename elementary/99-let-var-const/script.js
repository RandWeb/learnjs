// var num1 = 10;
// var num1 = 20

// console.log(num1);

//error
// let num2 = 10;
// let num2 = 10;

/**********************/

//var گلوبالی در نظر گرفته می شود و داخل اسکوپ های داخلی در دسترس می باشد
var num1 = 20;

{
    var num1 = 30
}

console.log(num1)

let num2 = 20;

{
    let num2 = 30
}

console.log(num2)

/*********************** */
const number = 1;
// باید مقدار دهی بشه فقط مقدار اولی رو میگیره و هرگز تغییر نمی کنه