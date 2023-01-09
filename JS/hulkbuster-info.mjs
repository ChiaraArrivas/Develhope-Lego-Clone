import * as module from "../Design/design.js"

const $accordionBtn = document.querySelectorAll(".circle");
const $verticalLine = document.querySelectorAll(".line1");
const $horizontalLine = document.querySelectorAll(".line2");

const prevBtnCpt = document.querySelector(".prev-btn-cpt");
const nextBtnCpt = document.querySelector(".next-btn-cpt");
const carouselBodyCpt = document.querySelector(".carousel-body-cpt");
const $descriptionCarouselSmall = document.querySelector(".description-carousel-small");
const $carouselSmallBtnPrev = document.querySelector(".desc-btn-small-prev");
const $carouselSmallBtnNext = document.querySelector(".desc-btn-small-next");
const $carouselItemsSmall = document.querySelectorAll(".desc-carousel-item-small");
const $dotsSmall = document.querySelectorAll(".dot-small");
const $descriptionAccordionItems = document.querySelector(".accordion").querySelectorAll(".accordion-body");

const $collapses = document.querySelectorAll(".collapse-hulk");


module.CarouselNoRestart(prevBtnCpt, nextBtnCpt, carouselBodyCpt);
/* Animazione bottoni accordion */
for (let i = 0; i < $accordionBtn.length; i++) {
    $accordionBtn[i].addEventListener("click", () => {
        $verticalLine[i].classList.toggle("line1-anim");
        $horizontalLine[i].classList.toggle("line2-anim");
    })
}

module.CarouselInfiniteScoll($carouselSmallBtnPrev, $carouselSmallBtnNext, $descriptionCarouselSmall);
module.ScrollControls($descriptionCarouselSmall, $dotsSmall, $carouselItemsSmall, "black");
