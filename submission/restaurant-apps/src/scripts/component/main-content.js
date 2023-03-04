class MainContent extends HTMLElement {
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
              box-sizing: border-box;
              border-width: 0;
              border-style: solid;
              border-color: #e5e7eb;
          }
          :host {
              display: block;
              width: 100%;
          }
          .skip-link {
            position: absolute;
            top: -40px;
            left: 0;
            background-color: #00303F;
            color: #f5f4f4;
            padding: 8px;
            z-index: 100;
          }
          .skip-link:focus {
            top: 0;
          }
      </style>
      <a href="#mainContent" class="skip-link">Go to content</a>
    `
  }
}

customElements.define('main-content', MainContent)
