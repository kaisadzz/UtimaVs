let slider = document.querySelector('.slider');
let sliderItems = document.querySelectorAll('.slider img');
let currentIndex = 0;
const slideWidth = sliderItems[0].clientWidth;

function nextSlide() {
    currentIndex++;
    if (currentIndex >= sliderItems.length) {
        currentIndex = 0;
    }
    updateSlider();
}

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(nextSlide, 2000); // Altera o slide a cada 1 segundos

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}



const myObserver = new IntersectionObserver ((entries) => {
  entries.forEach( (entry) => {
    if(entrye.isIntersecting){
        entry.target.classList.add('show')
    } else {
        entry.target.classList.remove('show')
    }
  } )
}   )

const elements = document.querySelectorAll('.texto')

elements.forEach( (element) => myObserver.observe (element))


