import * as module from "../Design/design.js";

const prevBtnCpt = document.querySelector(".prev-btn-cpt")
const nextBtnCpt = document.querySelector(".next-btn-cpt")
const carouselBodyCpt = document.querySelector(".carousel-body-cpt")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const carouselBody = document.querySelector(".carousel-body")

module.CarouselNoRestart(prevBtnCpt, nextBtnCpt, carouselBodyCpt);
module.CarouselNoRestart(prevBtn, nextBtn, carouselBody);