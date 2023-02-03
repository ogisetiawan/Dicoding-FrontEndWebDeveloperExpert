import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/media-query.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./component/main-content.js";
import Main from "./view/main.js";

//? init component
const main = new Main({
  hamburger: document.querySelector("#hamburgerButton"),
  drawer: document.querySelector("#navigationDrawer"),
  hero: document.querySelector("#hero"),
  content: document.querySelector("#mainContent"),
});

document.addEventListener('DOMContentLoaded', main);
