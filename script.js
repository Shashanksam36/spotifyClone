//Inatialize variables
let pp=document.getElementById('pauseplay')
let songIndex=0;
let audio=new Audio("songs/1.mp3");
let myProgressBar=document.getElementById("myProgressBar")
let gif=document.getElementById("gif")
let currentSong=document.getElementById('currentSongName')
let songItem=Array.from(document.getElementsByClassName("songItem"));
let songs=[
    { Name:"Warrior-Mortals" ,filepath:"songs/1.mp3" ,profpath:"covers/1.jpg"},
    { Name:"Celio Huma-Huma" ,filepath:"songs/2.mp3" ,profpath:"covers/2.jpg"},
    { Name:"Invisiable[NCS]" ,filepath:"songs/3.mp3" ,profpath:"covers/3.jpg"},
    { Name:"My Hearts" ,filepath:"songs/4.mp3" ,profpath:"covers/4.jpg"},
    { Name:"Heros to Night" ,filepath:"songs/5.mp3" ,profpath:"covers/5.jpg"},
    { Name:"She Doesn't Mind" ,filepath:"songs/6.mp3" ,profpath:"covers/6.jpg"},
    { Name:"Ransom" ,filepath:"songs/7.mp3" ,profpath:"covers/7.jpg"},
    { Name:"Warrior-Mortals" ,filepath:"songs/8.mp3" ,profpath:"covers/8.jpg"},
    { Name:"Heros to Night" ,filepath:"songs/9.mp3" ,profpath:"covers/9.jpg"},
    { Name:"Mortals" ,filepath:"songs/10.mp3" ,profpath:"covers/10.jpg"},
    { Name:"Mortals" ,filepath:"songs/1.mp3" ,profpath:"covers/1.jpg"},
    { Name:"Mortals" ,filepath:"songs/9.mp3" ,profpath:"covers/9.jpg"}
]
songItem.forEach((element , i)=>{
    // console.log(element , i)
    element.getElementsByTagName("img")[0].src=songs[i].profpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].Name;
});
//play audio onclick on play/pause button
pp.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0)
    {
        audio.play();
        pp.classList.remove('fa-circle-play');
        pp.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        document.getElementById(`${songIndex}`).target.classList.remove("fa-circle-play");
        document.getElementById(`${songIndex}`).target.classList.add("fa-circle-pause");
        let mn=Math.floor(audio.duration/60);
        console.log(mn)
    }
    else
    {
        audio.pause();
        makeAllPlay();
        pp.classList.remove('fa-circle-pause');
        pp.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
});
// update of seekbar
audio.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    console.log(audio.duration)
    progress=parseInt((audio.currentTime/audio.duration)*100);
    myProgressBar.value=progress;
    if(progress===parseInt(100))
    {
            makeAllPlay();
            songIndex=songIndex+1;
            if(songIndex===10)
                songIndex=0;
            currentSong.innerText=songs[songIndex].Name
            audio.src=`songs/${songIndex+1}.mp3`
            audio.currentTime=0;
            audio.play();
            pp.classList.remove('fa-circle-play');
            pp.classList.add('fa-circle-pause');
    }
});
// change song time on change in seekbar
myProgressBar.addEventListener('change',()=>{
    audio.currentTime=myProgressBar.value*audio.duration/100;
});

//change songs onclick
const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName("songItemsPlay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}
Array.from(document.getElementsByClassName("songItemsPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        // console.log(e.target);
        if(e.target.classList.value==="fa-regular songItemsPlay fa-circle-play"){
            // console.log(e.target.classList.value)
            makeAllPlay();
            e.target.classList.remove("fa-circle-play");
            e.target.classList.add("fa-circle-pause");
            songIndex=parseInt(e.target.id);
            currentSong.innerText=songs[songIndex].Name
            audio.src=`songs/${songIndex+1}.mp3`
            audio.currentTime=0;
            audio.play();
            pp.classList.remove('fa-circle-play');
            pp.classList.add('fa-circle-pause');
            gif.style.opacity=1;
        }
        else
        {
            e.target.classList.remove("fa-circle-pause");
            e.target.classList.add("fa-circle-play");
            audio.pause();
            pp.classList.remove('fa-circle-pause');
            pp.classList.add('fa-circle-play');
            gif.style.opacity=0;
        }
    })
})
//precious
document.getElementById('previous').addEventListener('click',()=>{
    makeAllPlay();
    songIndex=songIndex-1;
    if(songIndex===-1)
        songIndex=9;
    currentSong.innerText=songs[songIndex].Name
    audio.src=`songs/${songIndex+1}.mp3`
    audio.currentTime=0;
    audio.play();
    pp.classList.remove('fa-circle-play');
    pp.classList.add('fa-circle-pause');
})
//next
document.getElementById('next').addEventListener('click',()=>{
    makeAllPlay();
    songIndex=songIndex+1;
    if(songIndex===10)
        songIndex=0;
    currentSong.innerText=songs[songIndex].Name
    audio.src=`songs/${songIndex+1}.mp3`
    audio.currentTime=0;
    audio.play();
    pp.classList.remove('fa-circle-play');
    pp.classList.add('fa-circle-pause');
})
document.getElementById('shuffel').addEventListener('click',()=>{
    songIndex=Math.round(Math.random()*10);
    if(songIndex===10)
        songIndex=0;
    currentSong.innerText=songs[songIndex].Name
    audio.src=`songs/${songIndex+1}.mp3`
    audio.currentTime=0;
    audio.play();
    pp.classList.remove('fa-circle-play');
    pp.classList.add('fa-circle-pause');
})
//audio dueration value
// let dur=()=>{
//     let min=Math.floor(audio.duration/60);
//     console.log(min)
// }

