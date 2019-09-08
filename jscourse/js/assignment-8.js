"use strict";

const sliderBody = document.querySelector('slider-exam__slide');
const sliderImages = document.querySelectorAll('slider-exam__slide div');
const prevBtn = document.querySelector('prev');
const nextBtn = document.querySelector('next');

//counter

let counter = 1;
const size = sliderImages[0].clientWidth;

sliderBody.style.transform = 'transtateX(' + (-size * counter) + 'px')';