import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/media-query.css";
import '@fortawesome/fontawesome-free/js/all.js';
import App from "./component.js";

const app = new App({
  button: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  hero: document.querySelector("#hero"),
  content: document.querySelector("#mainContent"),
});

document.addEventListener('DOMContentLoaded', app);
