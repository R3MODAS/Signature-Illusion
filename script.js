let bg = document.getElementById("bg");
let bgcolor = document.querySelector(".bg-overlay");
let heading = document.querySelector(".heading");
let rotateimg = document.querySelector(".rotatingimg");
let textPop = document.querySelector(".text-popup");
let firstSect = document.querySelector("#first-section");
let firstsectCont = document.querySelector(".firstsectCont");
let box = document.querySelector(".box");
let logo = document.querySelector(".logoimg2");
let navbar = document.querySelector(".navbar");
let fade = document.querySelector(".fade-effect-nav");
let menubtn = document.querySelector(".menubtn");

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

    if (value < 2200) {
        logo.style.opacity = 0;
        fade.style.display = "none";
    }

    if (value == 2175 || value >= 2200) {
        logo.style.transition = "opacity 0.2s linear";
        logo.style.opacity = 1;
        logo.style.position = "fixed";
        logo.style.top = "0px";
        fade.style.display = "block";

    }

    if (value >= 3300) {
        box.style.scale = 0.8 + (value - 2000) / 4000;
    }
    console.log(value);

})
