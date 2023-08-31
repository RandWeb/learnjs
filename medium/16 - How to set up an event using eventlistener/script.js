const $=document;

let clickElem = $.getElementById("click");
let dblClickElem = $.getElementById("dblclick");
let keyDownElem = $.getElementById("keydown");
let keyUpElem = $.getElementById("keyup");
let keyPressElem = $.getElementById("keypress");
let blurElem = $.getElementById("blur");
let focusElem = $.getElementById("focus");

clickElem.addEventListener("click",()=>{
    alert("clicked")
});
dblClickElem.addEventListener("dblclick",()=>{
    alert("double clicked")
});
keyDownElem.addEventListener("keydown",()=>{
    alert("key down")
});
keyUpElem.addEventListener("keyup",()=>{
    alert("key up")
});

keyPressElem.addEventListener("keypress",()=>{
    alert("key press")
});

blurElem.addEventListener("blur",()=>{
    alert("blur");
});
focusElem.addEventListener("focus",()=>{
    alert("FOCUS");
});