const $accordionBtn = document.querySelectorAll(".circle");
const $verticalLine = document.querySelectorAll(".line1");
const $horizontalLine = document.querySelectorAll(".line2");
const $carouselSmallBtnPrev = document.querySelector(".desc-btn-small-prev");
const $carouselSmallBtnNext = document.querySelector(".desc-btn-small-next");
const $carouselItems = document.querySelectorAll(".desc-carousel-item");
const $descriptionCarouselSmall = document.querySelector(".description-carousel-small");
const $carouselItemsSmall = document.querySelectorAll(".desc-carousel-item-small");

for (let i = 0; i < $accordionBtn.length; i++) {
    $accordionBtn[i].addEventListener("click", () => {
        $verticalLine[i].classList.toggle("line1-anim");
        $horizontalLine[i].classList.toggle("line2-anim");
    })
}


function carousel(previousButton, nextButton, carouselBody, value = 0) {
    carouselBody.style.scrollBehavior = "smooth";

    previousButton.addEventListener("click", () => {
        let scrollStep = carouselBody.clientWidth;
        let scrollLength = carouselBody.scrollWidth - scrollStep;
        carouselBody.scrollLeft -= (scrollStep + value);
        if (Math.floor(carouselBody.scrollLeft) == 0) {
            carouselBody.scrollLeft = scrollLength;
        }
    })

    nextButton.addEventListener("click", () => {
        let scrollStep = carouselBody.clientWidth;
        let scrollLength = carouselBody.scrollWidth - scrollStep;
        carouselBody.scrollLeft += (scrollStep + value);
        if (Math.ceil(carouselBody.scrollLeft) == scrollLength) {
            carouselBody.scrollLeft = 0;
        }
    })

}

carousel($carouselSmallBtnPrev, $carouselSmallBtnNext, $descriptionCarouselSmall);

function ScrollControls(carousel, dots, items, dotColor){
    dots[0].style.backgroundColor = dotColor;

carousel.addEventListener("scroll", () => {
    let itemNumber = items.length;
    let windowWidth = carousel.clientWidth;
    let totalLength = carousel.scrollWidth + windowWidth;
    let currentItem = Math.round(carousel.scrollLeft / (totalLength / (itemNumber + 1)));
    for (let i = 0; i < dots.length; i++) {
        if (currentItem != i) {
            dots[i].style.backgroundColor = "";
        } else {
            dots[i].style.backgroundColor = dotColor;
        }
    }
})
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
        carousel.scrollLeft =  i * carousel.clientWidth;
    })
}}

ScrollControls($descriptionCarouselSmall, $dotsSmall, $carouselItemsSmall, "black");
ScrollControls($descriptionCarousel, $dots, $carouselItems, "white");

const scrollbar = document.querySelector(".scrollbar");
const scrollbarThumb = document.querySelector(".thumb");
const scrollDiv = document.querySelector(".accordion-card-container");


function legoCustomHorizontalScrollbar(gallery, scrollThumb) {
    scrollThumb.style.minWidth = (gallery.clientWidth / gallery.scrollWidth) * 100 + "%";

window.addEventListener("resize", () => {
    let width = gallery.scrollWidth;
    let scrollbarStyle = scrollThumb.style;
    let visiblePerc = (gallery.clientWidth / width) * 100;
    scrollbarStyle.minWidth = visiblePerc + "%";
    scrollbarStyle.marginLeft = (gallery.scrollLeft / width) * 100 + "%";
})

scrollDiv.addEventListener("scroll", () => {
    scrollThumb.style.marginLeft = (gallery.scrollLeft / gallery.scrollWidth) * 100 + "%";
})
}

legoCustomHorizontalScrollbar(scrollDiv, scrollbarThumb);