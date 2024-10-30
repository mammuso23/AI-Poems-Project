function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: `Two roads diverged in a yellow wood,
    And sorry I could not travel both
    And be one traveler, long I stood`,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemGeneratorElement = document.querySelector("#poetic-ai");
poemGeneratorElement.addEventListener("submit", generatePoem);
