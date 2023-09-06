let loginForm = document.getElementById("login-form");
let eventObject = document.getElementById("event-object");


loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("submit");

})

eventObject.addEventListener("click",(event)=>{
    console.log(event);
    console.log(event.target);
})