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
      <a href="n&a-extension.html" class="extensions">News and Announcements</a>
      <a href="contact.html" class="contact">Contact us</a>
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
      <div class="locationRow">
        <span>Location</span>
        <div class="location-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3840.267202088418!2d120.9311836!3d15.7369978!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390d73d5af73b51%3A0xbd960c0f9a69bbbe!2sCollege%20of%20Education%20CLSU!5e0!3m2!1sen!2sph!4v1700526716581!5m2!1sen!2sph" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>  
        </div>
      </div>
    </div>
    <div class="copyright">
        <span>
          &copy; Copyright 2021 Central Luzon State University All Rights
          Reserved</span>
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

  if(page.classList.contains(BODY.classList)) {
    // page.classList.add('current');
    page.parentElement.classList.add('current');
  }
})