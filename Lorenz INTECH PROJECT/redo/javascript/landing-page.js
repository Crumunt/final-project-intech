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

// const TOPIMAGE = document.getElementById("news1");

// let topPos = TOPIMAGE.offsetTop;

// document.querySelector('.news-slider-images').scrollTop = topPos;

const SLIDERS = document.querySelectorAll('button[class*="-slider"]');

loadFirstImageonReload();



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

PCBUTTON.addEventListener('click', () => remove('.dean-publication'))
PBUTTON.addEventListener('click', () => show('.dean-publication'));

const READ_MORE = document.querySelector('.readMore');

READ_MORE.addEventListener('click', () => {
    location.href = 'n&a-extension.html';
})

hover(READ_MORE)

function show(section) {
    // const SECTION = document.querySelector(`${section}-section`);

    const POPUP_CONTAINER = document.querySelector(`${section}-wrapper`);

    POPUP_CONTAINER.classList.toggle('active');

    // const OVERLAY = document.createElement('div');
    // OVERLAY.classList.toggle('active');

    // OVERLAY.id = 'overlay';

    // SECTION.append(OVERLAY);
}

function remove(section) {

    // const OVERLAY = document.getElementById('overlay');

    // OVERLAY.classList.toggle('active');

    // const ALERT_SECTION = document.querySelector(`${section}-section`);

    // ALERT_SECTION.removeChild(OVERLAY);

    const POPUP_CONTAINER = document.querySelector(`${section}-wrapper`);

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

function hover(button) {

    button.addEventListener('mouseenter', () => {
        button.classList.toggle('active');
    })

    button.addEventListener('mouseout', () => {
        button.classList.toggle('active');
    })

}