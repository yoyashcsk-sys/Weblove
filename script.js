const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");
const scene4 = document.getElementById("scene4");
const scene5 = document.getElementById("scene5");

const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");
const memoryBtn = document.getElementById("memoryBtn");
const lastBtn = document.getElementById("lastBtn");
const yesBtn = document.getElementById("yesBtn");
const timeBtn = document.getElementById("timeBtn");

function showScene(scene){

document.querySelectorAll(".scene").forEach(s=>{

s.classList.remove("active");

});

scene.classList.add("active");

}

const letter =
"Before you read this... I just want to thank you for opening this page. Every word you're about to read comes straight from my heart.";

startBtn.onclick = ()=>{

showScene(scene2);

typeLetter();

}

function typeLetter(){

const box=document.getElementById("typewriter");

box.innerHTML="";

continueBtn.style.display="none";

let i=0;

const timer=setInterval(()=>{

box.innerHTML+=letter.charAt(i);

i++;

if(i>=letter.length){

clearInterval(timer);

continueBtn.style.display="inline-block";

}

},40);

}

const apology=[

"I know I made mistakes.",

"I know I hurt you.",

"I never wanted to become the reason behind your tears.",

"You deserve love, respect and happiness.",

"I'm truly sorry from the bottom of my heart.",

"If you can... please give us one more chance. ❤️"

];

continueBtn.onclick=()=>{

showScene(scene3);

showApology();

}

function showApology(){

const box=document.getElementById("apologyText");

box.innerHTML="";

let index=0;

function nextLine(){

if(index<apology.length){

const p=document.createElement("p");

p.innerHTML=apology[index];

p.style.marginBottom="20px";

p.style.opacity="0";

p.style.transition=".8s";

box.appendChild(p);

setTimeout(()=>{

p.style.opacity="1";

},100);

index++;

setTimeout(nextLine,1800);

}

}

nextLine();

}

memoryBtn.onclick=()=>{

showScene(scene4);

}

lastBtn.onclick=()=>{

showScene(scene5);

}

yesBtn.onclick=()=>{

document.getElementById("celebration").style.display="flex";

}

timeBtn.onclick=()=>{

alert("Take all the time you need... I'll always be waiting. ❤️");

}
