let h1Elem = document.getElementById("title");

let liElems = document.querySelectorAll(".list-item");

let inputElem = document.getElementById("skill");

let selectElem = document.getElementById("countries");


//console.log(h1Elem.textContent);
console.log(liElems[1].innerHTML);
console.log(liElems[3].innerText);

//change inner data 

liElems[2].innerHTML = "خدمت ها";

console.log(inputElem.value)

//change input data 

inputElem.value = "MBA";
console.log(inputElem.value)

// get value in select tag 
console.log(selectElem.value);
console.log(selectElem[0]);
console.log(selectElem[0].label);

selectElem.value = 2;
