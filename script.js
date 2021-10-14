let songindex=0;

let audioElement=new Audio('./songs/1.mp3');

let masterplay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myprogressBar')
let gif=document.getElementById("gif");
let songitems=Array.from(document.getElementsByClassName('songItem'));
let mastersongname=document.getElementById("mastersongname");

let songs=[
    {songName:"Mann Bharryaa-B Praak" , filePath:"./songs/1.mp3" , coverPath: "./covers/1.jpg"},
    {songName:"Ranjha-Jasleen Royal" , filePath:"./songs/2.mp3" , coverPath: "./covers/2.jpg"},
    {songName:"Sorry-Justin Bieber" , filePath:"./songs/3.mp3" , coverPath: "./covers/3.jpg"},
    {songName:"Bilionera-Otilia" , filePath:"./songs/4.mp3" , coverPath: "./covers/4.jpg"},
    {songName:"MI-Gente-J Balvin" , filePath:"./songs/5.mp3" , coverPath: "./covers/5.jpg"},
    {songName:"Move On- Bad Habits" , filePath:"./songs/6.mp3" , coverPath: "./covers/6.jpg"},
    {songName:"Duniya-Riki Nairobi" , filePath:"./songs/7.mp3" , coverPath: "./covers/7.jpg"},
    {songName:"Right Here Waiting-Jada Facer" , filePath:"./songs/8.mp3" , coverPath: "./covers/8.jpg"},
    {songName:"Heros Tonight-Janji" , filePath:"./songs/9.mp3" , coverPath: "./covers/9.jpg"},
    {songName:"Hey Mama-Nicki Minaj" , filePath:"./songs/10.mp3" , coverPath: "./covers/10.jpg"}
]

songitems.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

//Handling play/Pause Button
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        console.log("here1");
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        console.log("here2");
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

//Handling the ProgressBar Button
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100) ;
    myProgressBar.value=progress;
})

//syncronising progressbar with song duration
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration /100;
})

// audioElement.play();

const makeallPlay=()=>{
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
   })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        if(e.target.classList[2]==="fa-pause-circle"){
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            audioElement.pause();

            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
            gif.style.opacity=0;
        }else{
            makeallPlay();
            console.log("Here");
            songindex=parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
        
            // console.log(songindex);
            mastersongname.innerText=songs[songindex-1].songName;
            audioElement.src=`./songs/${songindex}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();

            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
            gif.style.opacity=1;
        }
    })
})

document.getElementById("forward").addEventListener('click',()=>{
    if(songindex==10)songindex=1;
    else songindex=songindex+1;

    mastersongname.innerText=songs[songindex-1].songName;
    audioElement.src=`./songs/${songindex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
})

document.getElementById("backward").addEventListener('click',()=>{
    if(songindex==1)songindex=10;
    else songindex=songindex-1;

    mastersongname.innerText=songs[songindex-1].songName;
    audioElement.src=`./songs/${songindex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
})
