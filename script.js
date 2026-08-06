
document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

card.style.transform="scale(.97)";

setTimeout(()=>{

card.style.transform="translateY(-10px)";

},120);

});

});