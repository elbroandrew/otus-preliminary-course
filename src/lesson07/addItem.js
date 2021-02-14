import { isNotEmpty } from "./drawApp.js";

export function addItem(input, el) {
  const currentInput = input;
  const inputValue = input.value;
  const div = el.querySelector("div");
  const pList = div.querySelectorAll("p");
  if (isNotEmpty(inputValue)) {
    if (pList.length >= 5) {
      let text = "";
      for (let i = 1; i < pList.length; i += 1) {
        text += `<p>${pList[i].textContent}</p>`;
      }

      div.innerHTML = `${text}`;
      div.innerHTML += `<p>${inputValue}</p>`;
    } else {
      div.innerHTML += `<p>${inputValue}</p>`;
    }
    currentInput.value = "";
  }
}
