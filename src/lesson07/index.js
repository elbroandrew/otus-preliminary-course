import { drawApp } from "./drawApp.js";
import { initListeners } from "./initListeners.js";

const app = document.querySelector("#app");
drawApp(app);
initListeners(app);
