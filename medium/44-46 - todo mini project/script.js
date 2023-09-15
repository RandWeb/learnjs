let todoUl = document.getElementById("todo");
let inputElem = document.querySelector("input");


function removeElem(e){
    e.target.parentElement.remove();
}
inputElem.addEventListener("keydown",(e)=>{
    
    if (e.key==="Enter"){
        if (e.target.value.trim().length===0){
            alert("لطفا چیزی وارد کنید");
        }else 
        addTodo(e.target.value)
        e.target.value="";
    }
});
function addTodo(todo){
    let liElem = document.createElement("li");
    //liElem.className="todo-item"
    liElem.classList.add("todo-item");
    let iElem = document.createElement("i");
    //iElem.className="todo-item-remove";
    iElem.classList.add("todo-item-remove");
  //  iElem.setAttribute("onClick","removeElem(event)");
    iElem.addEventListener("click",(e)=>{
        removeElem(e);
    })
    iElem.innerText="X";
    liElem.innerHTML=`${todo}`
    liElem.appendChild(iElem);
    todoUl.appendChild(liElem);
}
