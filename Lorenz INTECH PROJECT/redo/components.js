class Header extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
    <header>
    <a href="landing-page.html">
      <div class="image-container">
        <img src="../images/clsu-logo.jpg" alt="" />
      </div>
    </a>
    <nav>
      <a href="courses-offered.html" class="courses">Courses Offered</a>
      <a href="faculty.html" class="faculty">Faculty</a>
      <a href="facilities.html" class="facilities">Facilities</a>
      <a href="services.html" class="services">Services</a>
    </nav>
  </header>
    `
  }
}

class Footer extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
    <footer>
    <div class="main-content">
      <div class="generalInfoRow">
        <div class="image-container">
          <a href="landing-page.html">
          <img src="../images/clsu-logo.jpg" alt="" />
          </a>
        </div>
        <div class="header-container">
          <span class="college-name">College of Education</span>
          <span class="college-gen-loc">Science City of Munoz</span>
        </div>
        <div class="contacts-container">
          <ul>
            <li>
              <p>
                <img src="../images/email.png" alt="" />
                ced@clsu2.edu.ph
              </p>
            </li>
            <li>
              <p>
                <img src="../images/land-line.png" alt="" />
                +63 912 345 6789
              </p>
            </li>
            <li>
              <p>
                <img src="../images/pin.png" alt="" />
                Central Luzon State University, Science City of Muñoz Nueva
                Ecija, Philippines
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div class="formRow">
        <div class="form">
          <div class="name-input-container">
            <input type="text" placeholder="Email" />
          </div>
          <textarea
            name=""
            id=""
            cols="45"
            rows="8"
            placeholder="Body"
          ></textarea>
          <button class="submitForm">Submit</button>
        </div>
        <div class="func-not-avail-section" id="popup">
          <div class="func-not-avail-wrapper">
            <div class="alert-header">
              <p>Alert</p>
              <button class="close-alert">&times;</button>
            </div>
            <div class="alert-body">
              <p>Function still under work</p>
            </div>
          </div>
        </div>
      </div>
      <div class="locationRow">
        <span>Location</span>
        <div class="location-container">
          <a
            href="https://www.google.com/maps/place/College+of+Education+CLSU/@15.7369978,120.9311836,17z/data=!4m9!1m2!2m1!1sCentral+Luzon+State+University,+%09Science+City+of+Mu%C3%B1oz+Nueva+Ecija,+Philippines!3m5!1s0x3390d73d5af73b51:0xbd960c0f9a69bbbe!8m2!3d15.7371459!4d120.9361634!16s%2Fg%2F11ll3_4y4j?hl=en-US&entry=ttu"
            target="_blank"
          >
            <img src="../map.png" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div class="social-copyright">
      <div class="socialLinks">
        <nav>
          <a href="">
            <img src="../images/facebook.png" alt="" />
          </a>
          <a href="">
            <img src="../images/instagram.png" alt="" />
          </a>
          <a href="">
            <img src="../images/twitter.png" alt="" />
          </a>
          <a href="">
            <img src="../images/youtube.png" alt="" />
          </a>
        </nav>
      </div>
      <div class="copyright">
        <span
          >&copy; Copyright 2021 Central Luzon State University All Rights
          Reserved</span
        >
      </div>
    </div>
  </footer>
    `
  }
}

customElements.define('web-header', Header);
customElements.define('web-footer', Footer);


const CURRENT_PAGE = document.querySelectorAll('a');
const BODY = document.querySelector('body');

console.log(CURRENT_PAGE);
console.log(BODY.classList);

CURRENT_PAGE.forEach(page => {
  if(page.classList.value == BODY.classList.value) {
    page.classList.add('current');
  }
})