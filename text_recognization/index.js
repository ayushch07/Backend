let speech=new SpeechSynthesisUtterance();
 document.querySelector("button").addEventListener("click", ()=>{
        speech.text=document.querySelector("textarea").value;
        window.speechSynthesis.speak(speech);
 }); 
 let voices=[];
 let voiceselect=document.querySelector("select");
 window.speechSynthesis.onvoiceschanged=()=>{
      voices=window.speechSynthesis.getVoices();
      speech.voice=voices[0];
      voices.forEach((voice,i)=>(voiceselect.options[i]=new Option(voice.name,i)));
 };
 voiceselect.addEventListener("click",()=>{
    // console.log(voiceselect);
      speech.voice=voices[voiceselect.value];
 }
 );
 let stop=document.getElementById("stop");
 stop.addEventListener("click",()=>{
       window.speechSynthesis.cancel();
 })