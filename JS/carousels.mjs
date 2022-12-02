import * as module from "../Design/design.js";

const prevBtnCpt = document.querySelector(".prev-btn-cpt")
const nextBtnCpt = document.querySelector(".next-btn-cpt")
const carouselBodyCpt = document.querySelector(".carousel-body-cpt")
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const carouselBody = document.querySelector(".carousel-body")
const prevBtnSpdf = document.querySelector(".prev-btn-spdf")
const nextBtnSpdf = document.querySelector(".next-btn-spdf")
const carouselBodySpdf = document.querySelector(".carousel-body-spdf")

module.CarouselNoRestart(prevBtnCpt, nextBtnCpt, carouselBodyCpt);
module.CarouselNoRestart(prevBtn, nextBtn, carouselBody);
module.CarouselNoRestart(prevBtnSpdf, nextBtnSpdf, carouselBodySpdf);
