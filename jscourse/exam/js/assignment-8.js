"use strict";

const sliderBody = document.querySelector('#sliderBody');
const sliderImages = document.querySelectorAll('#sliderBody div');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const sliderDot = document.querySelectorAll('.slider-exam__dots div');

//counter

let counter = 1;
const size = sliderImages[0].clientWidth;

sliderBody.style.transform = 'translateX(' + (-size * counter ) + 'px)';

//listeners

nextBtn.addEventListener('click', () => {
    if (counter >= sliderImages.length -1) return;
    sliderBody.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    sliderBody.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    sliderBody.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    sliderBody.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

sliderBody.addEventListener('transitionend', () => {
    if (sliderImages[counter].id === 'last') {
        sliderBody.style.transition = 'none';
        counter = sliderImages.length - 2;
        sliderBody.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }

    if (sliderImages[counter].id === 'first') {
        sliderBody.style.transition = 'none';
        counter = sliderImages.length - counter;
        sliderBody.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
});

//dots