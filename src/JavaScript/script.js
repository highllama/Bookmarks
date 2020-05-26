const carouselButtons = document.querySelectorAll('.featuresButtons button');
const carousel = document.querySelector('.featuresCarousel');
const burguerButton = document.querySelector('.burguerIcon');
const headerList = document.querySelector('.headerList');
const mobileIcon = document.getElementById('mobileIcon');
const details = document.querySelectorAll('.details details')


console.log(details)

details.forEach((details) => {
    details.querySelector('summary').addEventListener('click',   open)
})

function open() {
    details.forEach(element => {
        element.removeAttribute('open')
    })
 }



// ----------------------------------BURGUER MENU ---------------------------------

burguerButton.addEventListener('click', () => {
    headerList.classList.toggle('displayed')

    if (mobileIcon.attributes[1].nodeValue == "./src/imgs/icon-hamburger.svg") {
        mobileIcon.attributes[1].nodeValue = "./src/imgs/icon-close.svg"
    }
    else
        mobileIcon.attributes[1].nodeValue = "./src/imgs/icon-hamburger.svg"

})


// --------------------------FEATURES------------------------------

carouselButtons[0].addEventListener('click', () => {

    carousel.scrollLeft = 0

    carouselButtons[0].classList.add('activeFeature')

    carouselButtons[1].classList.remove('activeFeature')
    carouselButtons[2].classList.remove('activeFeature')

})

carouselButtons[1].addEventListener('click', () => {
    carousel.scrollLeft = window.screen.availWidth

    carouselButtons[1].classList.toggle('activeFeature')

    carouselButtons[0].classList.remove('activeFeature')
    carouselButtons[2].classList.remove('activeFeature')
})

carouselButtons[2].addEventListener('click', () => {
    carousel.scrollLeft = window.screen.availWidth * 2
    carouselButtons[2].classList.toggle('activeFeature')

    carouselButtons[0].classList.remove('activeFeature')
    carouselButtons[1].classList.remove('activeFeature')
})











