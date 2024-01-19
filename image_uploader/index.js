let profile=document.getElementById("profile");
let input=document.getElementById("input-file");
// input.onchange=function(){
//     profile.src=URL.createObjectURL(input.files[0]);
//     console.log(profile.src);
// }
input.addEventListener("change",function(){
           console.log(input.files);
        // profile.src=URL.createObjectURL(input.files[0]); ese bhi kar sake to neeche waal tarika bhi sahi hai
        profile.setAttribute('src',URL.createObjectURL(input.files[0]));
});