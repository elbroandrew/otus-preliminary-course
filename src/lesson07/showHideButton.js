export function showHideButton(button, inputValue) {
  const currentButton = button;
  if (inputValue === "") {
    currentButton.hidden = true;
  } else {
    currentButton.hidden = false;
  }
}
