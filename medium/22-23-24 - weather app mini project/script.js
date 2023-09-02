const $ = document;
let boxSearchInput = $.querySelector(".search-bar");
let searchIcon = $.getElementById("searchIcon");
let citiesData = {
    tehran: {city: 'Tehran', temp: 12, weather: 'Sunny', humidity: 23, windSpeed: 32},
    shiraz: {city: 'Shiraz', temp: 9, weather: 'windy', humidity: 12, windSpeed: 14},
    tabriz: {city: 'Tabriz', temp: 1, weather: 'rainy', humidity: 43, windSpeed: 12},
    mashhad: {city: 'Mashhad', temp: 16, weather: 'snowy', humidity: 7, windSpeed: 24},
    esfahan: {city: 'Esfahan', temp: 23, weather: 'Sunny', humidity: 15, windSpeed: 18},
}

const backgrounds = [
    "https://wallpapercave.com/wp/wp12175694.jpg",
    "https://e0.pxfuel.com/wallpapers/522/8/desktop-wallpaper-most-beautiful-places-in-iran-will-dazzle-you-iran-nature.jpg",
    "https://mwallpaper.ir/wp-content/uploads/2022/06/%D8%B9%DA%A9%D8%B3-%D8%A8%D8%A7%DA%A9%DB%8C%D9%81%DB%8C%D8%AA-%D9%82%D9%84%D9%87-%D8%AF%D9%85%D8%A7%D9%88%D9%86%D8%AF.jpg",
    "https://mwallpaper.ir/wp-content/uploads/2022/06/%D8%B9%DA%A9%D8%B3-%D8%A8%D8%A7%DA%A9%DB%8C%D9%81%DB%8C%D8%AA-%DA%A9%D9%88%D9%87-%D8%AF%D9%85%D8%A7%D9%88%D9%86%D8%AF-%D8%AF%D8%B1-%D9%81%D8%B5%D9%84-%D8%A8%D9%87%D8%A7%D8%B1-1024x640.jpg?v=1654105076",
];

(() => {
    let indexOfBackground = Math.floor(Math.random() * backgrounds.length);
    console.log(indexOfBackground)
    $.body.style.background = `url("${backgrounds[indexOfBackground]}") no-repeat `;
    $.body.style.backgroundSize = "cover";
})();

searchIcon.addEventListener("click", () => {
    let item = Object.entries(citiesData).filter(item => item[1].city.toLowerCase().includes(boxSearchInput.value.toLowerCase()));
    if (item.length > 0) {
        console.log(Object.values(item));
        $.querySelector(".city").innerText=`${item[0][1]['city']}`;
        $.querySelector(".temp").innerText=`${item[0][1]["temp"]} °C`;
        $.querySelector(".description").innerText=`${item[0][1]["weather"]}`;
        $.querySelector(".humidity").innerText=`Humidity: ${item[0][1]["humidity"]}%`;
        $.querySelector(".wind").innerText=`Wind speed: ${item[0][1]["windSpeed"]}km/h`;
    }
});

