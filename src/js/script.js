window.addEventListener('DOMContentLoaded', function() {
    'use script'; 
  
    const menu = document.querySelector('.ul'),
    menuItem = document.querySelectorAll('.li'),
    hamburger = document.querySelector('.hamburger'),
    up = document.querySelector('.up');
   
    const more = document.querySelectorAll('.button'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

    let slider = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),   
    sliderIndex =1;

    const anchors = document.querySelectorAll('a[href*="#"]');
-
    showSlides(sliderIndex);
    function showSlides(n) {
        if(n > slider.length) {
            sliderIndex =1;
        }
        if( n < 1) {
            sliderIndex = slider.length;
        }
        slider.forEach(item => item.style.display = 'none');
        slider[sliderIndex-1].style.display = 'block';
        // slider[sliderIndex-1].classList.remove('rotateOut');
        slider[sliderIndex-1].classList.add('animate__fadeIn');  
        slider[1].style.filter = 'hue-rotate(90deg)';
        slider[2].style.filter = 'hue-rotate(280deg)';
    }
function addSlide(n) {
    showSlides(sliderIndex += n);
}
function currentSlide(n) {
    showSlides(sliderIndex = n);
}
prev.addEventListener('click',() => {
    addSlide(1); 
});
next.addEventListener('click',() => {
    addSlide(-1);
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('active');
});
menuItem.forEach(function(item,i) {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('active');
        menuItem.forEach (item => item.classList.remove('li_active'));
        menuItem[i].classList.add('li_active');
 
    });
});

let posIndex = window.scrollY || document.documentElement.scrollTop ;
console.log(posIndex);
window.addEventListener('scroll',function() {
let pos = window.scrollY; 
    if(posIndex > pos){
        hamburger.style.opacity = '1'; 
    }else if(posIndex  >= 700){
        up.style.opacity = '1';
    } else {
        hamburger.style.opacity = '0.3';
        up.style.opacity = '0';
    }
    posIndex = pos;
});

more.forEach( function(item){
item.addEventListener('click', function() {
    overlay.style.display = 'block';
    document.body.style.overflow ='hidden'; 
});   
});
close.addEventListener('click', function() {
    overlay.style.display = 'none'; 
    document.body.style.overflow ='';
});


for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault() 
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}
});