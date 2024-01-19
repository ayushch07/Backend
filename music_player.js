const playBtn = document.querySelector('#pp');
const progress = document.querySelector('#progress');
const songList = document.querySelector('#song-list');
let prev=document.querySelector("#prev");
let mute=document.querySelector("#mute");
let currsong=0;
let next=document.querySelector("#next");
let songs = [
    {
        name: 'song1' , 
        id: 1
    },
    {
        name: 'song2' , 
        id: 2
    },
    {
        name: 'song3' , 
        id: 3
    },
    {
        name: 'song4' , 
        id: 4
    }
]

// constructor
const audio = new Audio('./assets/song1.mp3');


// show songs in ul

for(let song of songs){
    const li = document.createElement('li');
    li.innerText = song.name;
    li.setAttribute('id' , song.id);
    li.classList.add('song-item'); //styling
    songList.append(li);
}
songList.addEventListener('click' , function(e){
    let url=e.target.innerText;
    audio.src = `./assets/${url}.mp3`;
    currsong=e.target.id;
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.remove('fa-play');
    playBtn.children[0].classList.add('fa-pause');
})
// play btn click 
let flag=true;
playBtn.addEventListener('click',  function(){
    // audio.paused ? audio.play() : audio.pause();
    if(flag){
        playBtn.children[0].classList.remove('fa-play');
        playBtn.children[0].classList.add('fa-pause');
        audio.play();

        flag=!flag
    }
    else{
        playBtn.children[0].classList.remove('fa-pause');
        playBtn.children[0].classList.add('fa-play');
        flag=!flag;
        audio.pause();
    }
})


// current time ko dekho 
audio.addEventListener('timeupdate' , function(){
    const currentProgress = audio.currentTime * 100 / audio.duration;
    progress.value = currentProgress;
})

// input ko aone hisaab se aage peeche krna
progress.addEventListener('change' , function(){
    const updatedTime =  audio.duration * progress.value / 100;
    audio.currentTime = updatedTime;
})

// gaana khud se kro select
prev.addEventListener("click",()=>{
        currsong--;
          if(currsong<=0)
          {
            currsong=songs.length;
          }
          audio.src = `./assets/song${currsong}.mp3`;
          audio.currentTime = 0;
          audio.play();
          playBtn.children[0].classList.remove('fa-play');
          playBtn.children[0].classList.add('fa-pause');
})
next.addEventListener("click",()=>{
    currsong++;
      if(currsong>songs.length)
      {
        currsong=1;
      }
      audio.src = `./assets/song${currsong}.mp3`;
      audio.currentTime = 0;
      audio.play();
      playBtn.children[0].classList.remove('fa-play');
      playBtn.children[0].classList.add('fa-pause');
})
let mutedflag=true;
  mute.addEventListener("click",()=>{
         audio.muted=mutedflag;
         mutedflag=!mutedflag;
         if(!mutedflag)
         {
             mute.children[0].classList.remove("fa-volume-high");
             mute.children[0].classList.add("fa-volume-xmark");
             
         }
         else
         {
            mute.children[0].classList.remove("fa-volume-xmark");
            mute.children[0].classList.add("fa-volume-high");
         }
  })
  let counter=0
  let kachu=document.querySelector("#kachua");
  
  let sher=document.querySelector("#sher");
  
  let rabbit=document.querySelector("#rabbit");
  kachu.addEventListener("click",()=>{
    audio.playbackRate=0.5;
  })
  sher.addEventListener("click",()=>{
    audio.playbackRate=1.0;
  })
  rabbit.addEventListener("click",()=>{
    audio.playbackRate=2.0;
  })


