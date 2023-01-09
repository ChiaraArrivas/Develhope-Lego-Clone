export function CarouselNoRestart(previousButton, nextButton, carouselBody) {
    carouselBody.style.scrollBehavior = "smooth";
    previousButton.style.visibility = "hidden";

    previousButton.addEventListener("click", () => {
        let scrollStep = carouselBody.clientWidth;
        carouselBody.scrollLeft -= scrollStep;
    })

    nextButton.addEventListener("click", () => {
        let scrollStep = carouselBody.clientWidth;
        carouselBody.scrollLeft += scrollStep;
    })

    carouselBody.addEventListener("scroll", () => {
        let scrollStep = carouselBody.clientWidth;
        let scrollLength = carouselBody.scrollWidth - scrollStep;
        if (Math.ceil(carouselBody.scrollLeft) == scrollLength || Math.floor(carouselBody.scrollLeft) == scrollLength) {
            nextButton.style.visibility = "hidden";
        } else {
            nextButton.style.visibility = "visible"
        }
        if (Math.floor(carouselBody.scrollLeft) == 0) {
            previousButton.style.visibility = "hidden";
        } else {
            previousButton.style.visibility = "visible"
        }
    })
}

export function CarouselInfiniteScoll(previousButton, nextButton, carouselBody, value = 0) {
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

export function ScrollControls(carousel, dots, items, dotColor){
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
