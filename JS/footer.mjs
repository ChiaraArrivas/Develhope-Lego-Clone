// JS per gestire gli accordions (come visibilità/funzioni in base alla viewport width)
const $accordion_buttons = document.querySelectorAll(".accordion-button");
const $panels = document.querySelectorAll(".accordion-collapse");

let screenWithoutAccordions = window.matchMedia("(min-width: 992px)");

function disabledAccordions(screen) {
    // Stato iniziale: bottoni abilitati e accordion-collapse senza show
    if (screen.matches) {
        // Bottoni disabilitati + show
        $accordion_buttons.forEach(button => button.disabled = true);
        $panels.forEach(panel => panel.classList.toggle("show"));
    } else {
        // Bottoni abilitati + NO show
        $accordion_buttons.forEach(button => button.disabled = false);
        $panels.forEach(panel => panel.classList.toggle("show"));
    }
  }
  
disabledAccordions(screenWithoutAccordions); // Call listener function at run time
screenWithoutAccordions.addListener(disabledAccordions) // Attach listener function on state changes