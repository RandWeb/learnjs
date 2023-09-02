let h2Elem = document.querySelector("h2")
window.addEventListener("online", () => {
    h2Elem.classList.remove("offline");
    h2Elem.classList.add("online");
    h2Elem.innerHTML="Online";
});

window.addEventListener("offline", () => {
    h2Elem.classList.add("offline");
    h2Elem.classList.remove("online");
    h2Elem.innerHTML="Offline";
});