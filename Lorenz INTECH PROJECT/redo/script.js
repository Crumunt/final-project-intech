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

const SBUTTON = document.querySelector('.submitForm');
const SCBUTTON = document.querySelector('.close-alert');
const PBUTTON = document.querySelector('.publications-button');
const PCBUTTON = document.querySelector('.publications-close');

SBUTTON.addEventListener('click', ()=> createOverlay('.func-not-avail'));
SCBUTTON.addEventListener('click', ()=> {removeOverlay('.func-not-avail')})
PCBUTTON.addEventListener('click', ()=> removeOverlay('.dean-publication'))
PBUTTON.addEventListener('click', ()=> createOverlay('.dean-publication'));

function createOverlay(section) {
    const SECTION = document.querySelector(`${section}-section`);
    
    const POPUP_CONTAINER = document.querySelector(`${section}-container`);
    
    POPUP_CONTAINER.classList.toggle('active');
    
    const OVERLAY = document.createElement('div');
    OVERLAY.classList.toggle('active');

    OVERLAY.id = 'overlay';

    SECTION.append(OVERLAY)
}

function removeOverlay(section) {

    const OVERLAY = document.getElementById('overlay');

    OVERLAY.classList.toggle('active');

    const ALERT_SECTION = document.querySelector(`${section}-section`);

    ALERT_SECTION.removeChild(OVERLAY);

    const POPUP_CONTAINER = document.querySelector(`${section}-container`);

    POPUP_CONTAINER.classList.toggle('active');
}

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