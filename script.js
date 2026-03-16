window.onload = function(){
current = 1;

document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active");
});

document.getElementById("page1").classList.add("active");
};

let current = 1;

const music = document.getElementById("music");
const mute = document.getElementById("mute");

let musicStarted = false;
let hugScheduled = false;   // prevents multiple page transitions


/* ============================= */
/* PAGE TRANSITION */
/* ============================= */

function nextPage(){

// start music only after first interaction
if(current === 1 && !musicStarted){
music.play();
musicStarted = true;
}

let currentPage = document.getElementById("page"+current);

if(currentPage){
currentPage.classList.remove("active");
}

current++;

let next = document.getElementById("page"+current);

if(next){
next.classList.add("active");

if(current === 7){
celebration();
}
}

}



/* ============================= */
/* SOUND BUTTON */
/* ============================= */

mute.addEventListener("click", function(){

if(music.paused){
music.play();
mute.textContent = "🔊";
musicStarted = true;
}else{
music.pause();
mute.textContent = "🔇";
}

});



/* ============================= */
/* HUG HEARTS */
/* ============================= */

function sendHug(){

// hearts can always appear
for(let i=0;i<30;i++){

let heart = document.createElement("div");

heart.innerHTML = "💗";

heart.style.position = "absolute";
heart.style.left = Math.random()*100 + "%";
heart.style.bottom = "0";
heart.style.fontSize = "30px";

document.body.appendChild(heart);

heart.animate(
[
{transform:"translateY(0)",opacity:1},
{transform:"translateY(-700px)",opacity:0}
],
{duration:3000}
);

setTimeout(()=>heart.remove(),3000);
}

// schedule next page only once
if(!hugScheduled){
hugScheduled = true;

setTimeout(()=>{
nextPage();
},2000);
}

}



/* ============================= */
/* FLOATING SPARKLES */
/* ============================= */

function sparkle(){

let el = document.createElement("div");

let icons = ["✨","🌸","💗"];

el.innerHTML = icons[Math.floor(Math.random()*icons.length)];

el.style.position = "fixed";
el.style.left = Math.random()*100 + "%";
el.style.bottom = "0";
el.style.fontSize = "20px";

document.body.appendChild(el);

el.animate(
[
{transform:"translateY(0)",opacity:1},
{transform:"translateY(-700px)",opacity:0}
],
{duration:6000}
);

setTimeout(()=>el.remove(),6000);

}

setInterval(sparkle,1200);

/* ============================= */
/* FINAL PAGE ROSES */
/* ============================= */

function celebration(){

let icons = ["🌹","💗"];

for(let i=0;i<25;i++){

let el = document.createElement("div");

el.innerHTML = icons[Math.floor(Math.random()*icons.length)];

el.style.position="fixed";
el.style.left=Math.random()*100+"%";
el.style.top="100%";
el.style.fontSize="26px";
el.style.pointerEvents="none";

document.body.appendChild(el);

el.animate(
[
{transform:"translateY(0)",opacity:1},
{transform:"translateY(-900px)",opacity:0}
],
{duration:4000}
);

setTimeout(()=>el.remove(),4000);

}

}