let editorElem = document.getElementById("editor");
editorElem.style.border="1px solid #ccc";
editorElem.style.outline="none";
let logElem = document.getElementById("log");

editorElem.addEventListener("copy",()=>{
    let content = `${logElem.innerHTML} copy event <br>`;
    logElem.innerHTML = content;
});

editorElem.addEventListener("paste",()=>{
    let content = `${logElem.innerHTML} paste event <br>`;
    logElem.innerHTML = content;
});

editorElem.addEventListener("cut",()=>{
    let content = `${logElem.innerHTML} cut event <br>`;
    logElem.innerHTML = content;
});

