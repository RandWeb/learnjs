const $=document;
let h1Elem = $.getElementById("head1");
let h2Elem = $.getElementById("head2");
let h3Elem = $.getElementById("head3");
let h4Elem = $.getElementById("head4");
let h5Elem = $.getElementById("head5");
let h6Elem = $.getElementById("head6");

let listLi = $.querySelectorAll(".list-item");
let list = $.getElementById("list");
/*console.log(h1Elem.parentNode);
console.log(h1Elem.parentElement);*/
//h1Elem.parentElement.remove()

/*
console.log(h2Elem.previousElementSibling)
console.log(h3Elem.previousElementSibling.previousElementSibling)
console.log(h3Elem.nextElementSibling.nextElementSibling)
console.log(h4Elem.nextElementSibling)
*/
console.log(listLi[0]);
console.log(listLi[0].nextElementSibling);

console.log("childElementCount",list.childElementCount);
console.log("childList",list.childList);
console.log("children",list.children);
console.log("childNodes",list.childNodes);
