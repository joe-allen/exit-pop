// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';

class exitPopRender extends LitElement {
  // constructor(props) {
  //   if(props.componentName != undefined) {
  //     this.componentName = props.componentName;
  //   }
  // }

  render() {

    return html`
      <div class="exitPop--background">
        <div class="exitPop--container">
          <div class="exitPop--close"></div>
          <div class="exitPop--copy">
            <p><strong>Wait! By clicking out of this page you'll forfeit the chance to learn about this exciting and exclusive opportunity.</strong></p>
            <p>Click <u>Watch Video</u> to continue watching.</p>
            <p>Click <u><a href="#HTML_URL#">Read Transcript</a></u> to read about this opportunity.</p>
            <p>Or call 855-638-5895 to speak more about this opportunity with one of our professional customer care representatives.</p>
          </div>
          <div class="exitPop--buttons">
            <div class="exitPop--button exitPop--close">Watch Video</div>
            <div class="exitPop--button"><a href="#HTML_URL#">Read Transcript</a></div>
          </div>
        </div>
      </div>
    `
  }
}

// Register the new element with the browser.
customElements.define('exit-pop', exitPopRender);
