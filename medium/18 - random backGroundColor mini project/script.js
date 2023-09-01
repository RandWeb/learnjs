const $ = document;

let enableElem = $.getElementById("enable");
let disableElem = $.getElementById("disable");
let containerElem = $.querySelector(".container");
let changer;

enableElem.addEventListener("click", () => {
    enableElem.disabled = true;
    disableElem.disabled = false;
    changeBackgroundColor(true)
});
disableElem.addEventListener("click", () => {
    disableElem.disabled = true;
    enableElem.disabled = false;
    containerElem.style.backgroundColor = "white";
    changeBackgroundColor(false);
});

function changeBackgroundColor(active) {
    if (active) {
        changer = setInterval(() => {
            let red = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let opacity = Math.floor(Math.random() * 10);
            containerElem.style.backgroundColor = `rgba(${red},${blue},${green},${opacity})`;
        }, 2000);
    } else if (!active) {
        clearInterval(changer);
    }
}
    
