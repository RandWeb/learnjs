const $ = document;
let changeBtn = $.querySelector(".changeButton");
let resetBtn = $.querySelector(".resetButton");
let convertBtn = $.querySelector(".convertButton");
let cSpan = $.querySelector(".C");
let fSpan = $.querySelector(".F");
let resultElem = $.querySelector(".result");
let inputConverter = $.getElementById("converter");


changeBtn.addEventListener("click", () => {

    if (inputConverter.placeholder === "°C") {
        inputConverter.placeholder = "°F";
        $.title = " Js | °F to °C";
        cSpan.innerHTML = "°F";
        fSpan.innerHTML = "°C";
    } else {
        inputConverter.placeholder = "°C";
        $.title = " Js | °C to °F";
        cSpan.innerHTML = "°C";
        fSpan.innerHTML = "°F";
    }
});

resetBtn.addEventListener("click", () => {
    $.title = " Js | °C to °F";
    cSpan.innerHTML = "°C";
    fSpan.innerHTML = "°F";
    inputConverter.value = "";
    inputConverter.placeholder = "°C";
    resultElem.innerHTML = "";

});

convertBtn.addEventListener("click", () => {

    if (inputConverter.value === "" || isNaN(Number(inputConverter.value))) {
        resultElem.innerHTML = "invalid data";
        return;
    }
    if (cSpan.text === "°C") {
        resultElem.innerHTML = `${(Number(inputConverter.value) * 1.8) + 32}°F`;
    } else {
        let result = ((Number(inputConverter.value) - 32) * 5 / 9).toFixed(2);
        resultElem.innerHTML = `${result}°C`;
    }
});