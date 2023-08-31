

const ulElems = document.querySelector("ul");

const newLiElem = document.createElement("li");

newLiElem.innerHTML = "Products";

ulElems.append(newLiElem);
// سه تفاوت دارند که در قسمت های آینده متوجه می شوید
ulElems.appendChild(newLiElem);