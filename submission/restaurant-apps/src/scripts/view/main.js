import Drawer from "../component/drawer";

class Main {
  constructor({ hamburger, drawer, hero, content }) {
    this._hamburger = hamburger;
    this._drawer = drawer;
    this._hero = hero;
    this._content = content;

    this._initialMainShell();
  }

  _initialMainShell() {
    Drawer.init({
      hamburger: this._hamburger,
      drawer: this._drawer,
      hero: this._hero,
      content: this._content,
    });

  }
}

export default Main;
