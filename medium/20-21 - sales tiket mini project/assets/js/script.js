let provinceElem = document.getElementById("province");
let cityElem = document.getElementById("city");

function selectCitiesByProvinceId(provinceId) {
    fetch("assets/files/cities.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let cities = data.filter(city => city.province_id == provinceId);
            for (let city of cities) {
                let option = document.createElement("option");
                option.text = city.name;
                option.value = city.id;
                cityElem.add(option);
            }
        })
}

/*let cityError = document.getElementById("city-error");*/
cityElem.addEventListener("focusin", () => {

    
});

provinceElem.addEventListener("focusin", () => {
    onLoadProvinces();
});

function onSelectCity() {
    //let cities = require('./../files/cities.json');
    //  console.log(JSON.parse(cities,"cities"));
}

function onLoadProvinces() {
    fetch("assets/files/provinces.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            for (let province of data) {
                let option = document.createElement("option");
                option.text = province.name;
                option.value = province.id;
                provinceElem.add(option);
            }
        })
}

provinceElem.addEventListener("change",()=>{
    let provinceId = Number(provinceElem.value);
    cityElem.innerHTML="";
    if (provinceId===0){
        let option = document.createElement("option");
        option.text = "برای انتخاب شهر استان را مشخص کنید";
        option.value = 0;
        cityElem.add(option);
    }else{
        selectCitiesByProvinceId(provinceId);
    }
})
function onLoadCities() {
    fetch("assets/files/provinces.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            for (let province of data) {
                let option = document.createElement("option");
                option.text = province.name;
                option.value = province.id;
                provinceElem.add(option);
            }
        })
}