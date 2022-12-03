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


export function CarouselInfiniteScroll(previousButton, nextButton, carouselBody) {
    carouselBody.style.scrollBehavior = "smooth";

previousButton.addEventListener("click", () => {
    let scrollStep = carouselBody.clientWidth;
    let scrollLength = carouselBody.scrollWidth - scrollStep;
    carouselBody.scrollLeft -= scrollStep;
    if (Math.floor(carouselBody.scrollLeft) == 0) {
        carouselBody.scrollLeft = scrollLength;
    }
})

    nextButton.addEventListener("click", () => {
        let scrollStep = carouselBody.clientWidth;
        let scrollLength = carouselBody.scrollWidth - scrollStep;
        carouselBody.scrollLeft += scrollStep;
        if (Math.floor(carouselBody.scrollLeft) == scrollLength) {
            carouselBody.scrollLeft = 0;
        }
    })
    
}

