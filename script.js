
const btn = document.getElementById("startBtn");

btn.addEventListener("click",()=>{

document.body.style.transition="1s";

document.body.style.opacity="0";

setTimeout(()=>{

alert("Scene 2 Coming Soon ❤️");

document.body.style.opacity="1";

},1000);

});
