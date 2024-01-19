var hr=0;
var min=0;
var sec=0;
var count=0;
var timer=false;

function start()
{
    timer=true;
    stopwatch();

}
function stop()
{
    timer=false;
    
}
function reset()
{timer=false;
    hr=0;
    min=0;
    sec=0;
    count=0;
    document.getElementById("hr").innerHTML="00";
              
            document.getElementById("min").innerHTML="00";
            document.getElementById("sec").innerHTML="00";
            document.getElementById("count").innerHTML="00";

}
function stopwatch()
{

        if(timer==true)
        {
           
            count=count+1;
            if(count==100)
            {
                sec=sec+1;
                count=0;
            }
            if(sec==60)
            {
                min++;
                sec=0;
            }
            if(min==60)
            {
                hr++;
                min=0;
                sec=0;
            }
            var h=hr;
            var m=min;
            var s=sec;
            var c=count;
            if(h<10)
            {
                h="0"+h;
            }
            
            if(m<10)
            {
                m="0"+m;
            } 
            
            if(s<10)
            {
                s="0"+s;
            }
            
            document.getElementById("hr").innerHTML=h;
              
            document.getElementById("min").innerHTML=m;
            document.getElementById("sec").innerHTML=s;
            document.getElementById("count").innerHTML=count;
            setTimeout("stopwatch()", 10);
        }
}