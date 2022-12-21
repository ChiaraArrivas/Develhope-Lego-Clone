// JS per gestire gli accordions (come visibilità/funzioni in base alla viewport width)
const $accordion_buttons = document.querySelectorAll(".accordion-button");
const $panels = document.querySelectorAll(".accordion-footer");

let screenWithoutAccordions = window.matchMedia("(min-width: 992px)");

function disableAccordions(screen) {
    // Stato iniziale: bottoni funzionanti e accordion-collapse senza show
    if (screen.matches) {
        // Bottoni NON funzionanti + show
        $accordion_buttons.forEach(button => button.removeAttribute("data-bs-toggle"));
        $panels.forEach(panel => {
            if (!panel.classList.contains("show")) panel.classList.add("show");
        });
    } else {
        // Bottoni funzionanti + collapsed per resettare le freccie + NO show
        $accordion_buttons.forEach(button => {
            button.setAttribute("data-bs-toggle", "collapse");
            button.classList.add("collapsed");
        });
        $panels.forEach(panel => {
            if (panel.classList.contains("show")) panel.classList.remove("show");
        });
    }
};
  
disableAccordions(screenWithoutAccordions); // Call listener function at run time
screenWithoutAccordions.addEventListener("change", disableAccordions) // Attach listener function on state changes