class Footer extends HTMLElement {
  constructor () {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' }) // ? open shadow DOM
  }

  connectedCallback () {
    this.render()
  }

  render () {
    /// merupakan selector untuk menunjuk element host
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
            display: block;
            width: 100%;
        }
        .footer__text {
          display: inline-block;
          text-decoration: none;
          color: #f5f4f4;
          text-align: center;
        }
      </style>
    <p class="footer__text">Copyright &copy; 2022 - @ogisetiawan</p>
    `
  }
}

customElements.define('footer-app', Footer)
