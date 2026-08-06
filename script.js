
const btn = document.getElementById("startBtn");

btn.addEventListener("click",()=>{

document.body.style.transition="all 1.2s ease";
document.body.style.opacity="0";

setTimeout(()=>{

document.body.innerHTML=`

<div class="container">

<h1 style="font-size:45px;">Dear ❤️</h1>

<p id="typing"></p>

</div>

`;

const text="Before you read this... There is something I truly need to tell you.";

let i=0;

const typing=setInterval(()=>{

document.getElementById("typing").innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(typing);

}

},55);

document.body.style.opacity="1";

},1200);

});
