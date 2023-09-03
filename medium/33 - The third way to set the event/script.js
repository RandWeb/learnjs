let clickBtn = document.getElementById("click");
clickBtn.style.padding = "10px";
clickBtn.style.borderRadius = "4px";
clickBtn.style.color = "red";
clickBtn.style.cursor = "pointer";

function onClick(){
    alert("clicked");
}

clickBtn.onclick = onClick;

//clickBtn.addEventListener("click",onClick)

