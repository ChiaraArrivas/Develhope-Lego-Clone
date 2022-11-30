const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const carouselBody = document.querySelector(".carousel-body")

function CarouselNoRestart(previousButton, nextButton, carouselBody) {
    carouselBody.style.scrollBehavior = "smooth";
    prevBtn.style.visibility = "hidden";

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
            nextBtn.style.visibility = "hidden";
        } else {
            nextBtn.style.visibility = "visible"
        }
        if (Math.floor(carouselBody.scrollLeft) == 0) {
            prevBtn.style.visibility = "hidden";
        } else {
            prevBtn.style.visibility = "visible"
        }
    })
}

CarouselNoRestart(prevBtn, nextBtn, carouselBody);