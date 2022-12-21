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
        let metaVisibile = slidesContainer[0].clientHeight / 2;
        let posizionedeldiv = el.offsetTop - (el.clientHeight * 2.15);
        slidesContainer[0].scrollTop = posizionedeldiv - metaVisibile;
    }else if(slidesContainer[0].clientWidth > slidesContainer[0].clientHeight){
      let metaVisibile = slidesContainer[0].clientWidth / 2;
      let posizionedeldiv = el.offsetLeft - (el.clientWidth / 2);
      slidesContainer[0].scrollLeft = posizionedeldiv - metaVisibile;
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

bigBtnright.addEventListener("click", ()=>{
  const active = document.querySelector(".border-active")
  if(active.nextElementSibling){
    active.nextElementSibling.click()
  }else{
    slides[0].click()
  }
})

bigBtnleft.addEventListener("click", ()=>{
  const active = document.querySelector(".border-active")
  if(active.previousElementSibling){
    active.previousElementSibling.click()
  }else{
    slides[slides.length - 1].click()
  }
})



