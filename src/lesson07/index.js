import { drawApp, showHideButton, addItem } from "./drawApp";

const app = document.querySelector("#app");
drawApp(app);
const button = app.querySelector("button");
const input = app.querySelector("input");

showHideButton(button, input.value);

input.addEventListener("input", () => {
  showHideButton(button, input.value);
});

button.addEventListener("click", (ev) => {
  ev.preventDefault();
  addItem(input, app);
  showHideButton(button, input.value);
});
