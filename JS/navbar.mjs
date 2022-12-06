/* Carosello navbar bianca */
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

/* Navbar Gialla */

const $allCollapseChild = document.querySelectorAll(".collapse-child");
const $allCollapseButtons = document.querySelectorAll(".collapse-button");

$allCollapseButtons.forEach(el => {
    el.addEventListener("click", () => {
        $allCollapseChild.forEach(el => {
            el.classList.remove("show");
        })
    })
})

const $allCollapse = document.querySelectorAll(".collapse");
const $bigCollapseButtons = document.querySelectorAll(".big-collapse-button");
const $btnAcquista = document.querySelector(".btn-acquista");
const $btnScopri = document.querySelector(".btn-scopri");
const $btnAiuto = document.querySelector(".btn-aiuto");
const $acquista = document.getElementById("collapseWidth1");
const $scopri = document.getElementById("collapseWidth2");
const $aiuto = document.getElementById("collapseWidth3");
const $btnAcquista2 = document.querySelector(".btn-acquista-2");
const $btnScopri2 = document.querySelector(".btn-scopri-2");
const $btnAiuto2 = document.querySelector(".btn-aiuto-2");

function underlineButtons() {
    setTimeout(() => {
        if ($acquista.clientWidth > 0) {
            $btnAcquista2.classList.add("text-decoration-underline");
        } else {
            $btnAcquista2.classList.remove("text-decoration-underline");
        }
        if ($scopri.clientWidth > 0) {
            $btnScopri2.classList.add("text-decoration-underline");
        } else {
            $btnScopri2.classList.remove("text-decoration-underline");
        }
        if ($aiuto.clientWidth > 0) {
            $btnAiuto2.classList.add("text-decoration-underline");
        } else {
            $btnAiuto2.classList.remove("text-decoration-underline");
        }
    }, 10)
}

$bigCollapseButtons.forEach(el => {
    el.addEventListener("click", () => {
        $allCollapse.forEach(el => {
            el.classList.remove("show"); 
        })
    })
})

function myFunction(btn, menu) {
    btn.addEventListener("click", () => {
        $allCollapse.forEach(el => {
            el.classList.remove("show");
        })
        menu.classList.add("show");
    })
}
myFunction($btnAcquista, $acquista);
myFunction($btnAiuto, $aiuto);
myFunction($btnScopri, $scopri);

let $offCanvasBody = document.querySelector(".offcanvas-body");
let $offCanvasBtn = document.querySelector(".btn-close");

window.addEventListener("click", () => {underlineButtons()
    setTimeout(() => {
        if ($offCanvasBody.clientHeight < 50) {
            $offCanvasBtn.click();
        }
    }, 360)
})
