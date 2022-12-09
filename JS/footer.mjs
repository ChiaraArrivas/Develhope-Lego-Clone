// JS per gestire gli accordions (come visibilità/funzioni in base alla viewport width)
const $accordion_buttons = document.querySelectorAll(".accordion-button");
const $panels = document.querySelectorAll(".accordion-collapse");

let screenWithoutAccordions = window.matchMedia("(min-width: 992px)");

function disableAccordions(screen) {
    // Stato iniziale: bottoni abilitati e accordion-collapse senza show
    if (screen.matches) {
        // Bottoni disabilitati + show
        $accordion_buttons.forEach(button => button.disabled = true);
        $panels.forEach(panel => {
            if (!panel.classList.contains("show")) panel.classList.add("show");
        });
    } else {
        // Bottoni abilitati + collapsed per resettare le freccie + NO show
        $accordion_buttons.forEach(button => {
            button.disabled = false;
            button.classList.add("collapsed");
        });
        $panels.forEach(panel => {
            if (panel.classList.contains("show")) panel.classList.remove("show");
        });
    }
};
  
disableAccordions(screenWithoutAccordions); // Call listener function at run time
screenWithoutAccordions.addListener(disableAccordions) // Attach listener function on state changes