import { drawApp } from "./drawApp";
import { initListeners } from "./initListeners";

const app = document.querySelector("#app");
drawApp(app);
initListeners(app);
