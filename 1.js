// "use strict"
document.write("Ayush");
document.getElementById("h").innerText;
let x;
console.log(x ?? "popat");//x me undefined hai isliye popat aa gya.
//alert,prompt,confirm.
let p="";
console.log(typeof p);
let h=Boolean(p);
console.log(h);
let str="ayu\"sh";
console.log(str);
console.log(str.includes("jp"));
//arr.push last me add karne ke liye arr.unshift first me shift karne ke lie.
//text.split(' ') to split and covert to array.
//arr.join convert array to string arr.join(' ');
//bina return statement likhe hue output  me  undefined output aata hai.
//immediate invoke funciton example:
(function (){
    console.log("Immediate invoke function");
})();
//delete person.lastname to delete lastname property.
// let person={};
// //object ka sara property dekhne ke lie for(let i in person){
//     console.log(i+" "+person[i]);
// }
function getrandom(min,max){
    let x=Math.floor(Math.random()*(max-min+1))+min;
    return x;
}
console.log(getrandom(10,20));
let xx=new Date();
console.log(xx);
console.log(xx.getTime());
console.log(xx.getDay());
xx.setDate(xx.getDate()+50);

console.log(xx);
var person={
    name:"aman",
    age:32,
    // get getname()
    // {
    //     return this.name.toUpperCase();
    // },
    set setname(n)
    {
        this.name=n.toUpperCase();
    }
}
person.setname="ppba"

console.log(person);
function Student(name,age){
    this.name=name,
    this.age=age;
}
var ss=new Student("Ayush",21);
Student.prototype.nationality="Indian";
console.log(ss);    
//Hoisting-js pehle poore code ko padta hai or phir agar pehle function call ho chuka hai or declare baad me hua hai to us fucntion ko upar pohoncha deta hai isiko hoiting kehte hai,arrow function me error aata hai hoisting se

//var undefined declare kar deta hai.
console.log(xj);
var xj;
xj=4;
//agar var xj=7 neeche likhe phir bhi undefined aaega kyuki hoisting sirf declaration ko upar leke jaata hai.
//let kare agar var ki jagah to use bhi upar leke jaega hoisting par let khud undefined declare na kare isliye error aaega.

gg=8;
console.log(gg);//agar use strict likhe to error aaega.
//DOM properties-insertbefore,nexsibling,etc
let btn=document.getElementById("btn");
btn.setAttribute("name","form1");
let vv=btn.getAttribute("class");
console.log(vv);//remove karne ke liye removeattribute kardo.
btn.style.cssText="background-color:red"//1 tarika.
  //2 tarika.
// .classList ek fucntio hai 
//eventlistner ko remove karne ke lie .removeeventlistner
window.addEventListener('keydown',pressed);

// window.addEventListener('keydown',function(){

// });
//document.body.style.backgroung="black";
function pressed(event)
{
    console.log(event.key);
}
//bubbling and capturing-agar hum eventlistner me third parameter na paas kare to by default false hota hai or pehle child ka click event chalega phir parent ka or capturing me true kardenge to pehle parent than child.
//kisi bhi element ka natural behaviour change karne ke lie e.preventDefault() property use karte hai
console.log(window.outerHeight);
console.log(window.outerWidth);

let button=document.getElementById("button");
let yh=document.getElementById("yh");
let btn3=document.getElementById("btn3");
let win;
let url="https://www.google.com";
let features="height=500,width=500";
button.addEventListener('click',function(){
    win=window.open(url,'google',features);

});
yh.addEventListener('click',function(){
    window.open("https://www.yahoo.com",'google')
});
btn3.addEventListener('click',function(){
    win.close();
});
console.log(location.href,location.pathname,location.protocol);
let btn4=document.getElementById("btn4");
btn4.addEventListener('click',function(){
     window.location="https://www.google.com";
 
});
btn5.addEventListener('click',function(){
    location.reload();
})
console.log(navigator.appName);

console.log(navigator.appVersion);

console.log(navigator.appCodeName);

console.log(navigator.cookieEnabled);

console.log(navigator.platform);

console.log(navigator.javaEnabled);

console.log(screen.height);

console.log(screen.width);

console.log(screen.colorDepth);
