const COURSE_CONTAINER = document.querySelectorAll('[class*="container"]');

COURSE_CONTAINER.forEach(container => {
  container.addEventListener('mouseover', ()=> {
    container.classList.add('active');
  })

  container.addEventListener('mouseout', ()=> {
    container.classList.remove('active');
  })
})

const SBUTTON = document.querySelector('.submitForm');
const SCBUTTON = document.querySelector('.close-alert');

SBUTTON.addEventListener('click', ()=> createOverlay('.func-not-avail'));
SCBUTTON.addEventListener('click', ()=> {removeOverlay('.func-not-avail')})

function createOverlay(section) {
  const SECTION = document.querySelector(`${section}-section`);
  
  const POPUP_CONTAINER = document.querySelector(`${section}-wrapper`);
  
  POPUP_CONTAINER.classList.toggle('active');
  
  const OVERLAY = document.createElement('div');
  OVERLAY.classList.toggle('active');

  OVERLAY.id = 'overlay';

  SECTION.append(OVERLAY);
}

function removeOverlay(section) {

  const OVERLAY = document.getElementById('overlay');

  OVERLAY.classList.toggle('active');

  const ALERT_SECTION = document.querySelector(`${section}-section`);

  ALERT_SECTION.removeChild(OVERLAY);

  const POPUP_CONTAINER = document.querySelector(`${section}-wrapper`);

  POPUP_CONTAINER.classList.toggle('active');
}