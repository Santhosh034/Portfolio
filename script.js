// ==========================
// Typing Animation
// ==========================

const words = [
  "Java Developer",
  "Python Programmer",
  "AI Enthusiast",
  "Software Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

  if (!typing) return;

  const current = words[wordIndex];

  if (!deleting) {
    typing.textContent = current.substring(0, charIndex++);
  } else {
    typing.textContent = current.substring(0, charIndex--);
  }

  let speed = deleting ? 70 : 120;

  if (!deleting && charIndex === current.length + 1) {
    deleting = true;
    speed = 1500;
  }

  if (deleting && charIndex === 0) {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, speed);

}

typeEffect();


// ==========================
// Dark Mode
// ==========================

const themeBtn = document.getElementById("theme");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    if(themeBtn){
        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';
    }
}

if(themeBtn){

themeBtn.onclick=function(){

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){

localStorage.setItem("theme","dark");

themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

}else{

localStorage.setItem("theme","light");

themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

}

}

}


// ==========================
// Counter Animation
// ==========================

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const update=()=>{

const increment=Math.ceil(target/100);

count+=increment;

if(count<target){

counter.innerText=count;

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

}

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>counterObserver.observe(counter));


// ==========================
// Scroll Reveal
// ==========================

const reveal=document.querySelectorAll("section");

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:.2});

reveal.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(60px)";
section.style.transition="1s";

revealObserver.observe(section);

});


// ==========================
// Scroll Progress Bar
// ==========================

const progress=document.querySelector(".scroll-bar");

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const percent=(scrollTop/height)*100;

if(progress){
progress.style.width=percent+"%";
}

});


// ==========================
// Back To Top
// ==========================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

if(topBtn){

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

}


// ==========================
// Contact Form
// ==========================

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been sent successfully.");

form.reset();

});

}


// ==========================
// Loader
// ==========================

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

}

});


// ==========================
// Navbar Active Link
// ==========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ==========================
// Smooth Scroll
// ==========================

navLinks.forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// ==========================
// Console Message
// ==========================

console.log("Portfolio Developed by Santhosh B");