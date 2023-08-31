
const userName = prompt("Enter The Name: ");

const newH1Elem = document.createElement("h1");
newH1Elem.innerHTML = userName;
newH1Elem.setAttribute("id","userName");
newH1Elem.setAttribute("class","title");
newH1Elem.style.color = "green";
console.log(newH1Elem);