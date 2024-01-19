let btn=document.getElementById("img");
let arr=['&#128512;','&#128517;','&#128518;','&#128519;','&#128520;','&#128521;','&#128522;','&#128523;','&#128524;','&#128524;','&#128525;','&#128526;','&#128527;','&#128528;','&#128529;','&#128530;','&#128531;','&#128532;'];
let s=0,e=arr.length;
let p=document.getElementById("para");
 btn.addEventListener("click",()=>{
            let r=random();
            p.innerHTML=arr[r];
 });
  function random(){
         let val=Math.floor(Math.random()* (e-s))+s;
           return val;   
 }


//  function random(){
//          let val=Math.floor(Math.random()* (e-s))+s;
//          p.innerHTML=arr[val];
//          setTimeout(random, 1000);
//  }
//  random(); ye to random ke lie hai
 