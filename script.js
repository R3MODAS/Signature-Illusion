const bg = document.getElementById("bg");
const bgcolor = document.querySelector(".bg-overlay");
const heading = document.querySelector(".heading");
const rotateimg = document.querySelector(".rotatingimg");
const textPop = document.querySelector(".text-popup");
const firstSect = document.querySelector("#first-section");
const firstsectCont = document.querySelector(".firstsectCont");
const box = document.querySelector(".box");
const logo = document.querySelector(".logoimg2");
const fade = document.querySelector(".fade-effect-nav");

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    bg.style.backgroundSize = 250 + value * 5.3 + "px";
    bgcolor.style.opacity = 1 - value / 500;
    heading.style.opacity = 1 - value / 500;
    rotateimg.style.opacity = 1 - value / 500;

    if (value <= 500) {
        textPop.style.scale = 0 + value / 500;
        textPop.style.opacity = 0 + value / 500;
    }

    if (value == 500) {
        textPop.style.scale = "1";
    }

    if (value == 600) {
        textPop.style.scale = "1.04";
    }

    if (value == 700) {
        textPop.style.scale = "1.05";
    }

    if (value == 800) {
        textPop.style.scale = "1.06";
    }

    if (value == 900) {
        textPop.style.scale = "1.08";
    }

    if (value < 1200) {
        firstSect.style.position = "static";
        firstsectCont.style.display = "none";
    }

    if (value >= 1200) {
        firstSect.style.position = "relative";
        firstSect.style.top = "2000px";
        firstsectCont.style.display = "block";
    }

    if(value < 2100){
        logo.style.opacity = 0;
        fade.style.display = "none";
    }

    if(value >= 2100){
        logo.style.transition = "all 0.2s linear";
        logo.style.opacity = 1;
        logo.style.position = "fixed";
        logo.style.top = "0";
        fade.style.display = "block";
    }

    if (value >= 3300) {
        box.style.scale = 0.8 + (value - 2000) / 4000;
    }
})

const menu = document.querySelector(".ham__menu");
const close = document.querySelector(".close__menu");
const navbar = document.querySelector(".header__ul");
menu.addEventListener('click', ()=>{
    navbar.classList.add("active");
})  

close.addEventListener('click',()=>{
    navbar.classList.remove("active");
})