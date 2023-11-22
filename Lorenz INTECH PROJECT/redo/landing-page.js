// const header = document.querySelector('header');

// console.log(header.offsetWidth)

// const NEWSSLIDER = document.querySelectorAll('.news-slider');

// let lastNewsSliderSelected = document.body.querySelector('.news-slider[current="true"]')

// NEWSSLIDER.forEach(slider => slider.addEventListener('click', ()=> {


// }))

// function moveSlider(slider) {
//     if(lastNewsSliderSelected != null) {
//         lastNewsSliderSelected.style.transition = "border ease 0.15s"
//         lastNewsSliderSelected.setAttribute("current","false")
//     }

//     slider.setAttribute("current","true");

//     slider.style.transition = "all .20s"

//     let topPos = document.getElementById(`${slider.getAttribute('page')}`).offsetTop;

//     document.querySelector('.news-slider-images').scrollTop = topPos;

//     // document.getElementById(`${slider.getAttribute('page')}`).scrollIntoView();

//     lastNewsSliderSelected = slider;
// }

const SLIDERS = document.querySelectorAll('button[class*="-slider"]');

loadFirstImageonReload();

// const TOPIMAGE = document.getElementById("news1");

// let topPos = TOPIMAGE.offsetTop;

// document.querySelector('.news-slider-images').scrollTop = topPos;



SLIDERS.forEach(slider => slider.addEventListener('click', () => {

    let lastSelectedSlider = document.querySelector(`.${slider.className}[current="true"]`);;

    moveSlider(slider, lastSelectedSlider);

    // switch(slider.className) {
    //     case 'news-slider':
    //         moveSlider(slider, lastSelectedSlider);
    //         break;
    //     case 'announcement-slider':
    //         moveSlider(slider, lastSelectedSlider);
    //         break;
    // }

}))

const PBUTTON = document.querySelector('.publications-button');
const PCBUTTON = document.querySelector('.publications-close');

hover(PBUTTON)

PCBUTTON.addEventListener('click', ()=> removeOverlay('.dean-publication'))
PBUTTON.addEventListener('click', ()=> createOverlay('.dean-publication'));

const READ_MORE = document.querySelector('.readMore');

READ_MORE.addEventListener('click', ()=> {
    location.href='n&a-extension.html';
})

hover(READ_MORE)

function moveSlider(slider, lastSelectedSlider) {

    lastSelectedSlider.setAttribute('current', 'false');

    slider.setAttribute("current", "true");

    slider.style.transition = "all .20s"

    let topPos = document.getElementById(`${slider.getAttribute('page')}`).offsetTop;

    document.querySelector(`.${slider.className}-images`).scrollTop = topPos;

    lastSelectedSlider = slider;

}

function loadFirstImageonReload() {
    const TOP_IMAGES = document.querySelectorAll('button[current="true"]');

    TOP_IMAGES.forEach(button => {

        let topPos = document.getElementById(`${button.getAttribute('page')}`).offsetTop;

        document.querySelector(`.${button.className}-images`).scrollTop = topPos;
    })
}

function hover(button) {

    button.addEventListener('mouseenter', ()=> {
        button.classList.toggle('active');
    })

    button.addEventListener('mouseout', ()=> {
        button.classList.toggle('active');
    })

}