const button = document.querySelector(".button");
const div = document.querySelector("div");
const textField = document.querySelector(".text-field");
const paragraphElements = document.querySelectorAll("p");

/**
 * An array of paragraphs text content.
 * @type {(string|Array.)}
 */
const textInputsArray = Array.from(paragraphElements).map((el) => el.innerText);

// check if value of input is empty or not
checkValue();

button.addEventListener("click", addParagraph);

// check value input when typing event fires up
textField.addEventListener("input", checkValue);

// add paragraph
function addParagraph(event) {
  // prevent reloading page
  event.preventDefault();
  // create new paragraph text content
  const content = textField.value;
  // and push it into the array
  textInputsArray.push(content);

  // when paragraphs more then 5 discard the first one
  if (textInputsArray.length > 5) {
    textInputsArray.shift();
  }
  // draw paragraphs
  div.innerHTML = `${textInputsArray.map((el) => `<p>${el}</p>`).join("")}`;
  // make input field empty everytime
  textField.value = "";
}
/**
 * Checks if the input's value is empty or not.
 */
function checkValue() {
  if (textField.value.length === 0) {
    button.hidden = true;
  } else {
    button.hidden = false;
  }
}
