const bottle = document.querySelector(".bg__overlay");
const greenBg = document.querySelector(".bg__layer");
const heading = document.querySelector(".heading");
const rotatingSvg = document.querySelector(".rotatingimg");
const textBox = document.querySelector(".text__box");

const secondSect = document.querySelector("#second__section");
const secondSectContent = document.querySelector(".second__content");

const logo = document.querySelector(".logo__2");
const fade = document.querySelector(".fade__effect");

const box = document.querySelector(".box");

window.addEventListener("scroll", () => {
  const scrollValue = window.scrollY;

  bottle.style.backgroundSize = 250 + scrollValue * 5.3 + "px";
  heading.style.opacity = 1 - scrollValue / 500;
  rotatingSvg.style.opacity = 1 - scrollValue / 500;
  greenBg.style.opacity = 1 - scrollValue / 500;

  if (scrollValue <= 500) {
    textBox.style.scale = 0 + scrollValue / 500;
    textBox.style.opacity = 0 + scrollValue / 500;
  }

  if (scrollValue == 500) {
    textBox.style.scale = "1";
  }

  if (scrollValue == 600) {
    textBox.style.scale = "1.04";
  }

  if (scrollValue == 700) {
    textBox.style.scale = "1.05";
  }

  if (scrollValue == 800) {
    textBox.style.scale = "1.06";
  }

  if (scrollValue == 900) {
    textBox.style.scale = "1.08";
  }

  if (scrollValue < 1200) {
    secondSect.style.position = "static";
    secondSectContent.style.display = "none";
  }

  if (scrollValue >= 1200) {
    secondSect.style.position = "relative";
    secondSect.style.top = "2000px";
    secondSectContent.style.display = "block";
  }

  if (scrollValue < 2100) {
    logo.style.opacity = 0;
    fade.style.display = "none";
  }

  if (scrollValue >= 2100) {
    logo.style.transition = "all 0.2s linear";
    logo.style.opacity = 1;
    logo.style.position = "fixed";
    logo.style.top = "0";
    fade.style.display = "block";
  }

  if (scrollValue >= 3300) {
    box.style.scale = 0.8 + (scrollValue - 2000) / 4000;
  }
});
