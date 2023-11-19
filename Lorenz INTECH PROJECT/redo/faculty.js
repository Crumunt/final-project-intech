// const DEAN_CONTAINER = document.querySelector('.dean-container');


// DEAN_CONTAINER.addEventListener('mouseover', ()=> {
//   mousein(DEAN_CONTAINER);
// })

// DEAN_CONTAINER.addEventListener('mouseout', ()=> {
//   mouseout(DEAN_CONTAINER);
// })

// const HEAD_CONTAINER = document.querySelectorAll('.head-container');

// HEAD_CONTAINER.forEach(head => {
//   head.addEventListener('mouseover', ()=> {
//     mousein(head);
//   });
//   head.addEventListener('mouseout', ()=> {
//     mouseout(head);
//   })
// });


const CONTAINER = document.querySelectorAll('[class*="container"]')

CONTAINER.forEach(container => {
  container.addEventListener('mouseover', ()=> {
    // mousein(container);
    container.classList.add('active');
  })
  container.addEventListener('mouseout', ()=> {
    // mouseout(container);
    container.classList.remove('active');
  })
})