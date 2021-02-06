export function drawApp(el) {
  const newEl = el;
  newEl.innerHTML = `
  <input />
  <button>add</button>
  <div>
    <p>test 1</p>
    <p>test 2</p>
    <p>test 3</p>
  </div>
  `;

   return newEl;;
}

export function showHideButton(button, inputValue) {
  const currentButton = button;
  if (inputValue === "") {
    currentButton.hidden = true;
  } else {
    currentButton.hidden = false;
  }
}

export function isNotEmpty(content) {
  const regex = new RegExp(/^\s+$/g); // whitespace line
  if (!regex.test(content) && content !== "") {
    return true;
  }
  return false;
}

export function addItem(input, el) {
  const currentInput = input;
  const inputValue = input.value;
  const div = el.querySelector("div");
  const pList = div.querySelectorAll("p");
  if (isNotEmpty(inputValue)) {
    if (pList.length >= 5) {
      let text = "";
      for (let i = 1; i < pList.length; i+=1) {
        text += `<p>${pList[i].textContent}</p>`;
      }

      div.innerHTML = `${text}`;
      div.innerHTML += `<p>${inputValue}</p>`; 
    } else {
      div.innerHTML += `<p>${inputValue}</p>`;
    }
    currentInput.value = "";
  }
  currentInput.value = "";
}
