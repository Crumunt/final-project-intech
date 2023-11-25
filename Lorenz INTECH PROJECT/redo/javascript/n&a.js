const YEAR_BUTTON = document.querySelectorAll('[aria-current]')

console.log(YEAR_BUTTON)

YEAR_BUTTON.forEach(year => year.addEventListener('click', ()=> {
  let currentActiveButton = document.querySelector('li[aria-current="true"]');
  currentActiveButton.setAttribute('aria-current','false');

  let currentPage = document.querySelector('div[aria-current="true"]');
  currentPage.setAttribute('aria-current', 'false');
  currentPage.classList.remove('show')

  let newPage = document.querySelector(`div#${year.classList}`);
  newPage.setAttribute('aria-current','true');
  newPage.classList.add('show');

  year.setAttribute('aria-current','true');

}))