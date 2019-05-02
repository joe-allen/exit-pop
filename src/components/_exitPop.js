// Import the LitElement base class and html helper function
import { LitElement, html } from 'lit-element';
// import '../../scss/components/exitPop.scss';

class exitPop extends LitElement {
  // constructor(props) {
  //   if(props.componentName != undefined) {
  //     this.componentName = props.componentName;
  //   }
  // }
  track(event) {
    // the cursor has moused out
    console.log('listening')
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
    document.getElementsByClassName(`exitPop--background`)[0].classList.add('active');
  }
  pop_reRegister() {
    // start tracking mouse movement
    document.getElementsByTagName('html')[0].addEventListener('mouseleave', this.track.bind(this), {once: true});
  }
  close() {
    // close exitPop
    document.getElementsByClassName(`exitPop--background`)[0].remove();
  }
  init() {
    // start tracking mouse movement
    document.getElementsByTagName('html')[0].addEventListener('mouseleave', (this.track.bind(this)), {once: true});

    // listen form close event
    if(this.componentName != undefined) {
      let close = document.getElementsByClassName(`exitPop--close`);
      for(let i = 0; i < close.length; i++) {
        document.getElementsByClassName(`exitPop--close`)[i].addEventListener('click', this.close.bind(this), false);
      }
    }
  }

  render() {

    // start tracking mouse movement
    document.getElementsByTagName('html')[0].addEventListener('mouseleave', () => {
      console.log("tracking....")
      if(event.clientY < 50 && window.innerWidth > 540) {
        console.log("left....")
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
        // this.pop();
      } else {
        // rereg listener bc mouse left,
        // but was below 50px from top
        this.pop_reRegister();
      }
    }, {once: true});

  }
}

// Register the new element with the browser.
customElements.define('exit-pop', exitPop);
// export default exitPop;