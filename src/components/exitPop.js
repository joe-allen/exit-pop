// Import the LitElement base class and html helper function
import { LitElement, html, css } from 'lit-element';

class exitPopRender extends LitElement {

  static get properties() { return {
    h1: { type: String },
    h2: { type: String },
    p1: { type: String },
    p2: { type: String },
    p3: { type: String },
    btnText1: { type: String },
    btnText2: { type: String },
    btnLink1: { type: String },
    btnLink2: { type: String },
    imgUrl: { type: String },
    imgOnly: { type: String },
    imgLink: { type: String }
  };}

  constructor(props) {
    super();
    this.h1 = "";
    this.h2 = "";
    this.p1 = "";
    this.p2 = "";
    this.p3 = "";
    this.btnText1 = "";
    this.btnText2 = "";
    this.btnLink1 = "";
    this.btnLink2 = "";
    this.imgUrl = "";
    this.imgOnly = "";
    this.imgLink = "";
  }

  track(event) {
    // the cursor has moused out
    if(event.clientY < 50 && window.innerWidth > 540) {
      this.pop();
    } else {
      // rereg listener bc mouse left,
      // but was below 50px from top
      this.pop_reRegister();
    }
  }
  pop() {
    // add class to show exitPop
    // document.getElementById("exitPop").style.display = "initial";
    this.style.display = "flex";
    // document.getElementsByClassName(`exitPop--background`)[0].classList.add('active');
  }
  pop_reRegister() {
    // start tracking mouse movement
    document.getElementsByTagName('html')[0].addEventListener('mouseleave', this.track.bind(this), {once: true});
  }
  close() {
    // close exitPop
    // listen form close event
    this.style.display = "none";
  }
  init() {
    // start tracking mouse movement
    document.getElementsByTagName('html')[0].addEventListener('mouseleave', (this.track.bind(this)), {once: true});
  }
  render() {

    this.init();

    return html`
      <style>
        :host ::selection {
          background: var(--close-bg-color, rebeccapurple);
          color: var(--close-x-color, #fff);
        }
        :host {display: none;}
        :host .exitPop--background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(14,14,14,.75);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
        }
        :host .exitPop--container {
          position: relative;
          width: 90vw;
          max-height: 80%;
          overflow-y: auto;
          overflow-x: auto;
          max-width: 800px;
          background: var(--container-bg, #fff);
          border: var(--container-border, 10px solid rebeccapurple);
          padding: 2%;
        }
        :host .exitPop--container.imgOnly {
          width: auto;
          padding: 0;
          background: transparent;
        }
        :host .exitPop--container.imgOnly img {
          display: flex;
        }
        :host .active {
          display: flex;
          animation: exitPop--background_active;
          animation-fill-mode: forwards;
          animation-iteration-count: 1;
          animation-delay: 250ms;
          animation-duration: 250ms;
        }
        @keyframes exitPop--background_active {
          0% {opacity: 0;}
          100% {opacity: 1;}
        }
        :host .exitPop--background a {
          text-decoration: none;
          color: initial;
        }
        :host [class^='exitPop--close'] {
          position: absolute;
          right: 0;
          top: 0;
          width: 1rem;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: .5rem;
          cursor: pointer;
          transition: 200ms;
        }
        :host [class^='exitPop--close']:hover {
          background-color: var(--close-bg-color, rebeccapurple);
        }
        :host [class^='exitPop--close']:hover::after {
          color: var(--close-x-color, #fff);
        }
        :host [class^='exitPop--close']::after {
          content: 'X';
          color: var(--close-x-color, rebeccapurple);
          margin: -0.05rem -.25rem 0 0;
        }
        :host .exitPop--copy {
          color: #0e0e0e;
          padding: 0 0 2% 0;
        }
        :host .exitPop--copy p {
          margin: 0;
        }
        :host .exitPop--copy p:not(:last-of-type) {
          margin-bottom: 10px;
        }
        :host .exitPop--copy > a {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        :host .exitPop--copy img {
          display: flex;
          align-self: center;
          margin: 0 auto;
        }
        :host .exitPop--buttons {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
        }
        :host .exitPop--button {
          cursor: pointer;
          text-align: center;
          border: 3px solid #0e0e0e;
          color: #0e0e0e;
          border-radius: 523523px;
          min-width: 200px;
          margin: .5rem;
          padding: 1rem;
          flex-grow: 1;
          flex-basis: auto;
          transition: 200ms;
        }
        :host .exitPop--button:hover {
          box-shadow: 4px 4px 14px rgba(14,14,14,.75);
          transform: scale(1);
        }
      </style>
      <div class="exitPop--background active exitPop--background_active">
          ${this.imgOnly == "false"
            ? html`
              <div class="exitPop--container">
                <div class="exitPop--close" @click="${(e) => this.close()}"></div>
                <div class="exitPop--copy">
                  ${this.imgLink && this.imgUrl
                    ? html`
                      <a href="${this.imgLink}">
                        <img src="${this.imgUrl}">
                      </a>`
                    : ''
                  }
                  ${this.imgUrl && !this.imgLink
                    ? html`
                      <img src="${this.imgUrl}">`
                    : ''
                  }
                  <h1><strong>${this.h1}</strong></h1>
                  ${this.h2
                    ? html`<h2>${this.h2}</h2>`
                    : ''
                  }
                  ${this.p1
                    ? html`<p>${this.p1}</p>`
                    : ''
                  }
                  ${this.p2
                    ? html`<p>${this.p2}</p>`
                    : ''
                  }
                  ${this.p3
                    ? html`<p>${this.p3}</p>`
                    : ''
                  }
                </div>
                <div class="exitPop--buttons">
                  ${this.btnText1
                    ? html`<div class="exitPop--button exitPop--close" @click="${(e) => this.close()}">${this.btnText1}</div>`
                    : ''
                  }
                  ${this.btnLink2
                    ? html`<a class="exitPop--button" href="${this.btnLink2}">${this.btnText2}</a>`
                    : ''
                  }
                </div>
              </div>
            `
            : html`
              <div class="exitPop--container imgOnly">
                <div class="exitPop--close" @click="${(e) => this.close()}"></div>
                <a href="${this.imgLink}">
                  <img src="${this.imgUrl}">
                </a>
              </div>
            `
          }
        </div>
      </div>
    `
  }
}

// Register the new element with the browser.
customElements.define('exit-pop', exitPopRender);
