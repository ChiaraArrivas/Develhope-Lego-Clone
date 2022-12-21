const slidesContainer = document.getElementsByClassName("product-detail-page-carousel-img-container");
const slide = document.querySelector(".carousel-img-container");
const prevButton = document.getElementById("btn-arrow-up");
const nextButton = document.getElementById("btn-arrow-down");
const direction = document.getElementById("img-array")
const bigimg = document.getElementById("big-img")
const slides = document.querySelectorAll(".carousel-img-container") 
const bigBtnleft = document.getElementById("big-carousel-btn-left")
const bigBtnright = document.getElementById("big-carousel-btn-right")
const bigImgContainer = document.getElementsByClassName("custom-big-img-container")[0]
const imgArray = document.getElementById("img")


function sideCarousel(){
  if(slidesContainer[0].clientHeight > slidesContainer[0].clientWidth){
nextButton.addEventListener("click", () => {
    let itemheight = slide.clientHeight;
    slidesContainer[0].scrollTop += itemheight + 14
  });
   
  prevButton.addEventListener("click", () => {
    let itemheight = slide.clientHeight;
    slidesContainer[0].scrollTop -= itemheight + 14
  });
}else if(slidesContainer[0].clientWidth > slidesContainer[0].clientHeight){
  nextButton.addEventListener("click", () => {
    let itemwidth = slide.clientWidth;
    slidesContainer[0].scrollLeft += itemwidth + 14
  });
   
  prevButton.addEventListener("click", () => {
    let itemwidth = slide.clientWidth;
    slidesContainer[0].scrollLeft -= itemwidth + 14
  });
}
}

sideCarousel()

window.addEventListener("resize", () => {
  sideCarousel()
})

slides.forEach((el) => {
  el.addEventListener("click", () => {
  bigimg.src = el.firstChild.src
  })
})


slides.forEach((el) => {
  el.addEventListener("click", () =>{
    slides.forEach((el) => {
    el.classList.remove("border-active")
  })
    el.classList.add("border-active")
      if(slidesContainer[0].clientHeight > slidesContainer[0].clientWidth){
        slidesContainer[0].scrollTop -= (slidesContainer[0].scrollHeight / 2) - el.offsetTop 
    }else if(slidesContainer[0].clientWidth > slidesContainer[0].clientHeight){
    
    } 
  })
})

bigImgContainer.addEventListener("mouseover", () =>{
  bigBtnleft.classList.remove("d-none")
  bigBtnright.classList.remove("d-none")
})

bigImgContainer.addEventListener("mouseleave", () =>{
  bigBtnleft.classList.add("d-none")
  bigBtnright.classList.add("d-none")
})


slides[0].click();





