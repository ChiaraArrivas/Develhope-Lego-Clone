/* Carosello navbar bianca */
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const scrollableNav = document.querySelector(".mySlides");
const $allCollapse = document.querySelectorAll(".collapse-nav");
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
const $topNav = document.querySelector(".first-nav-cont")
const $topNavBtn = document.querySelector(".x900px")

/* Navbar Gialla */

const $allCollapseChild = document.querySelectorAll(".collapse-child");
const $allCollapseButtons = document.querySelectorAll(".collapse-button");

/* Offcanvas navbar grande */

const $offCanvasBtn = document.querySelector(".btn-close-large");
const $offCanvas = document.querySelector(".offcanvas");

/* Carosello navbar bianca */

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

/* Chiusura navbar bianca responsive*/

$topNavBtn.addEventListener("click", () => {
    $topNav.style.display = "none"
})

/* Navbar Gialla */

/* Personalizzazioni sub menu offcanvas */

$allCollapseButtons.forEach(el => {
    el.addEventListener("click", () => {
        $allCollapseChild.forEach(el => {
            el.classList.remove("show");
        })
    })
})


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
        let thisMenuId = el.dataset.bsTarget;
        let thisMenu = document.querySelector(thisMenuId)
        if (thisMenu.clientWidth) {
            $offCanvasBtn.click();
        }
    })
})

function toggleShow(btn, menu) {
    btn.addEventListener("click", () => {
        $allCollapse.forEach(el => {
            el.classList.remove("show");
        })
        menu.classList.add("show");
    })
}
window.addEventListener("click", () => {
    underlineButtons()
})

toggleShow($btnAcquista, $acquista);
toggleShow($btnAiuto, $aiuto);
toggleShow($btnScopri, $scopri);

