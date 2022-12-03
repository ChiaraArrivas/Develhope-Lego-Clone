const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const scrollableNav = document.querySelector(".mySlides")



let lastScrollTop;
let navbar = document.querySelector('nav');
window.addEventListener('scroll',function(){
let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
if(scrollTop > lastScrollTop){
navbar.style.top='-140px';
}
else{
navbar.style.top='0';
}
lastScrollTop = scrollTop;
});

