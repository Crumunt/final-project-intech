const YEAR_BUTTON = document.querySelectorAll('li[aria-current]')

console.log(YEAR_BUTTON)

YEAR_BUTTON.forEach(year => year.addEventListener('click', ()=> showPage(year)))

const SELECT_YEAR = document.querySelector('select');

SELECT_YEAR.addEventListener('change', ()=> showPage(SELECT_YEAR))

function showPage(e) {

  console.log(e.tagName)

  let currentPage = document.querySelector('div[aria-current="true"]');
  currentPage.setAttribute('aria-current', 'false');
  currentPage.classList.remove('show')

  if (e.tagName == 'LI') {
    let currentActiveButton = document.querySelector('li[aria-current="true"]');
    currentActiveButton.setAttribute('aria-current', 'false');

    let newPage = document.querySelector(`div#${e.classList}`);
    newPage.setAttribute('aria-current', 'true');
    newPage.classList.add('show');

    e.setAttribute('aria-current', 'true');
  }
  else if (e.tagName == 'SELECT') {

    let currentActiveButton = document.querySelector('li[aria-current="true"]');
    currentActiveButton.setAttribute('aria-current', 'false');

    let newPage = document.querySelector(`div#${e.value}`);
    newPage.setAttribute('aria-current', 'true');
    newPage.classList.add('show');

    let respectiveButton = document.querySelector(`li.${e.value}`);

    respectiveButton.setAttribute('aria-current', 'true');
  }

}