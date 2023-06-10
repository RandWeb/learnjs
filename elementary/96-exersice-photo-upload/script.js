
let hasProfilePhoto = false;

let uploadProfile = setInterval(()=>{
if(!hasProfilePhoto){
    console.log("photo not found");
}else{
    console.log("photo uploaded photo");
}
},5000);