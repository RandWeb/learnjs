function SubmitedForm() {
    const userNameInput = document.getElementById("userName");
    const passwordInput = document.getElementById("password");
    let messages = [];
    let isInValidUserName = userNameInput.value.length <= 12;
    let isInValidPassword = passwordInput.value.length <= 8;
    if (isInValidUserName) {
        console.log(userNameInput.value)
        messages.push("نام کاربری نمی تواند کمتر از 12  کاراکتر باشد")
    }
    if (isInValidPassword) {
        console.log(passwordInput.value.length)
        messages.push("رمز عبور نمی تواند کمتر از 8  کاراکتر باشد")
    }
if (!isInValidUserName && !isInValidPassword){
    messages.push("کاربر عزیز شما با موفقیت لاگین شدید")
}
    showModal(messages);
    let time = Number(messages.length) * 1500
    setTimeout(function () {
        document.getElementById("modal-error").remove();
    }, time);
    
}


function showModal(errors) {
    const newDivElem = document.createElement("div");
    newDivElem.setAttribute("id", "modal-error")
    newDivElem.style.width = "250px";
    newDivElem.style.height = "auto";
    newDivElem.style.lineHeight = "1.5";
    newDivElem.style.background = "#eee";
    newDivElem.style.padding = "6px 12px";
    newDivElem.style.borderRadius = "6px";
    newDivElem.style.textAlign = "center";
    newDivElem.style.color = "red";
    newDivElem.style.margin = " 0 auto";
    newDivElem.style.position = "absolute";
    newDivElem.style.right = "2%";
    newDivElem.style.bottom = "2%";
    newDivElem.style.transitionProperty = "width";
    newDivElem.style.transitionDelay = ".5s";
    newDivElem.style.transitionDuration = "2s";
    newDivElem.style.transitionTimingFunction = "linear";
    newDivElem.innerText = errors.join("\n");
    const body = document.querySelector("body");
    body.appendChild(newDivElem);
}
