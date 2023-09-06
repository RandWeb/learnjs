 // Functions for select elems with id & class
 const $ = document;
 function _id(id_name) {
   return $.getElementById(id_name);
 }

 function _class(class_name) {
   return $.querySelector(`.${class_name}`);
 }

 // Select Elems
 let togglePassword = _class("toggle-password");
 let passwordField = _id("password-field");

 // Fire click event on eye icon
 togglePassword.addEventListener("click", function () {
   if (passwordField.type == "text") {
     passwordField.type = "password";
   } else {
     passwordField.type = "text";
   }
     togglePassword.classList.toggle("active");
 })