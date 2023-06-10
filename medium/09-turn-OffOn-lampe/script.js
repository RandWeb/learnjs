let divElement = document.createElement("div");
let bodyElement = document.querySelector("body");

divElement.style.width = "200px";
divElement.style.height = "200px";
divElement.style.margin = "auto auto";
divElement.style.border = "1px solid blue";
divElement.style.borderRadius = "50%";
divElement.style.cursor = "pointer";

divElement.setAttribute("onClick","turnOffOnLampe()")

bodyElement.append(divElement);

function turnOffOnLampe(){

    if(divElement.style.backgroundColor=="yellow"){
        divElement.style.backgroundColor = "white";
        return;
    }
    divElement.style.backgroundColor = "yellow";
}