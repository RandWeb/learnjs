let inputElem= document.querySelector("input");

inputElem.addEventListener("keydown",()=>{
    console.log("key down");
});

inputElem.addEventListener("keypress",()=>{
    console.log("keypress");
});

inputElem.addEventListener("keyup",()=>{
    console.log("keyup");
});