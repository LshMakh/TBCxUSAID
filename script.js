document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(26, 30, 31, 0.9)'; /* Change the transparency on scroll */
        } else {
            navbar.style.backgroundColor = 'rgba(26, 30, 31, 1)'; /* Reset to initial transparency */
        }
    });
});


const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const interval = 39000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

// slide.style.transform =`translateX(${-slideWidth*index}px)`;

const startSlide = ()=>{
slideId = setInterval(() => {
nextSlide();

}, interval);
};

const getSlides = () => document.querySelectorAll('.slide');


slide.addEventListener('transitioned', () => {
    slides = getSlides();
    if(slides[index].id === firstClone.id){
        slide.style.transition = 'none';
        index = 1
        slide.style.transform =`translateX(${-slideWidth*index}px)`;
    }

if(slides[index].id === lastClone.id){
    slide.style.transition = 'none';
    index = slides.length-2;
    slide.style.transform =`translateX(${-slideWidth*index}px)`;
}

});




const nextSlide = () =>{
    slides = getSlides();
    if(index >= slides.length - 1) return;
index++;
slide.style.transform =`translateX(${-slideWidth*index}px)`;
slide.style.transition = '0.7s'

}

const prevSlide = () => {
if(index<=0) return;
index--;
slide.style.transform =`translateX(${-slideWidth*index}px)`;
slide.style.transition = '0.7s'
};

slideContainer.addEventListener('mouseenter',()=>{
    clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// startSlide();


var acc = document.getElementsByClassName("accordion");
var i;

for(i=0; i<acc.length; i++){
    acc[i].addEventListener('click', function(){

        this.classList.toggle("active");
        this.parentElement.classList.toggle("active");

        var panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
        } else{
            panel.style.display = "block";
        }
    });
}

