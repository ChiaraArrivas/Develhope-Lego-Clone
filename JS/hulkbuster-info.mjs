import * as module from "../Design/design.js"

const $accordionBtn = document.querySelectorAll(".circle");
const $verticalLine = document.querySelectorAll(".line1");
const $horizontalLine = document.querySelectorAll(".line2");
const prevBtnCpt = document.querySelector(".prev-btn-cpt")
const nextBtnCpt = document.querySelector(".next-btn-cpt")
const carouselBodyCpt = document.querySelector(".carousel-body-cpt")
$verticalLine[0].classList.add("line1-anim");
$horizontalLine[0].classList.add("line2-anim");

module.CarouselNoRestart(prevBtnCpt, nextBtnCpt, carouselBodyCpt);

for (let i = 0; i < $accordionBtn.length; i++) {
    $accordionBtn[i].addEventListener("click", () => {
        $verticalLine[i].classList.toggle("line1-anim");
        $horizontalLine[i].classList.toggle("line2-anim");
    })
}

