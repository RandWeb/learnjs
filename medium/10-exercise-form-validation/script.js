function SubmitedForm() {
    const userNameInput = document.getElementById("userName");
    const passwordInput = document.getElementById("password");
    let errors = [];
    if (userNameInput.value.length <= 12) {
        console.log(userNameInput.value)
        errors.push("نام کاربری نمی تواند کمتر از 12  کاراکتر باشد")
    }
    if (passwordInput.value.length <= 8) {
        console.log(passwordInput.value.length)
        errors.push("رمز عبور نمی تواند کمتر از 8  کاراکتر باشد")
    }
    if (errors.length > 0) {
        showModalError(errors);
        let time = Number(errors.length) * 1500
        setTimeout(function () {
            document.getElementById("modal-error").remove();
        }, time);
    }
}


function showModalError(errors) {
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
    newDivElem.innerText = errors.join("\n");
    const body = document.querySelector("body");
    body.appendChild(newDivElem);
}
