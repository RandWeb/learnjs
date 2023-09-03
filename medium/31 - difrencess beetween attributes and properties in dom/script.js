let h1Elem = document.getElementById("name");

console.log(h1Elem.getAttribute("title")); //output : mehrdad
console.log(h1Elem.title);
console.log(h1Elem.className);
console.log(h1Elem.getAttribute("customAttr")); //output : customAttr

console.log(h1Elem.customAttr); //output : undefined
// هر المنت  نود یک ابجکت می باشد پس می توان با دات به مقادیر آن دست یافت
// هر اتربیوت کاستوم پراپرتی نیست و نمی توان به نقطه به آن دست یافت
// هر اتربیوت  پیشفرض المنت، می توان با نقطه به آن دست یافت چون پراپرتی میباشد

h1Elem.prop = "prop"; // add property
console.log(h1Elem.prop);
console.log(h1Elem.getAttribute("prop")); //output : null