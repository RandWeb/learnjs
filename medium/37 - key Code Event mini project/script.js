const $ = document;
let contentH4 = $.querySelector(".content");
let eventDiv = $.getElementById("events-container");
let keyBox = $.getElementById("key");
let locationBox = $.getElementById("location");
let whichBox = $.getElementById("which");
let codeBox = $.getElementById("code");

$.body.addEventListener("keydown", (e) => {
    console.log(e)
    e.preventDefault();
    contentH4.innerHTML = `${e.key}`;
    keyBox.querySelector(".box-body").innerText = e.key;
    locationBox.querySelector(".box-body").innerText = e.location;
    whichBox.querySelector(".box-body").innerText = e.which;
    codeBox.querySelector(".box-body").innerText = e.code;
});