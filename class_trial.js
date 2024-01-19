//console.log("hello");
class car{
     constructor(brand){
        console.log("Before super");
        this.brand=brand;
     }
     start(){
        console.log("Start");
     }
     stop(){
        console.log("Stop");
     }
}
//let car1=new car("Fortuner");
//console.log(car1.start());
class tyres extends car{
    constructor(brand){
        console.log("hello moto");
        super(brand);//to invoke parent class constructor
        console.log("after super")
    }
      name(){
        console.log("MRF");
       
      }
      air(){
        console.log("5 pascal");
      }
}
let car2=new tyres("innova");
console.log(car2);
for(let i=10;i<=10;i++)
console.log(Math.floor(Math.random()*10))//just for fun
