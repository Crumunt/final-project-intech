const COURSE_CONTAINER = document.querySelectorAll('.course-container');

COURSE_CONTAINER.forEach(container => {
  container.addEventListener('mouseover', ()=> {
    container.classList.add('active');
  })

  container.addEventListener('mouseout', ()=> {
    container.classList.remove('active');
  })
})