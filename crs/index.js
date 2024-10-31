function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "a1bo4439ac5fc07t02d36e4b34aa3665";
  let promt = `User intructions: Generate a poem about ${instructionsInput.value}`;
  let context =
    "You are a historic english major who loves to write short poems. You are required to generate an 8 line poem in basic HTML and separate each line. Just write the poem with no title. Do not include: ```html and ```. Make sure to follow the user instructions. Sign the poem at the end with 'SheCodes AI' inside a strong element. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemGeneratorElement = document.querySelector("#poetic-ai");
poemGeneratorElement.addEventListener("submit", generatePoem);
