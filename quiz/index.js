let element=document.querySelectorAll("li");

let c=0;

element.forEach(function(item){
  
          item.addEventListener("click",()=>{

               if(item.classList.contains("correct"))
               {
               
                 c++;
                
                item.classList.add("g");
               
                //item.style.backgroundColor="pink";
            
            

               }
          else
          {
           
               item.classList.add("h");
           
          }
          document.getElementById("h2").innerHTML=`You Score: ${c}`;
        }
          );
        
}
    
);
 

