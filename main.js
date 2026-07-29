// =======================================
// MM Agencies Website
// Version 1.0
// =======================================

// Navbar shadow while scrolling

window.addEventListener("scroll",function(){

const navbar=document.querySelector(".navbar");

if(window.scrollY>50){

navbar.classList.add("shadow");

}else{

navbar.classList.remove("shadow");

}

});

// Smooth animation

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});