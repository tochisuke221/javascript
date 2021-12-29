'use strict';

{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('ul');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;

  function updateButtons(){
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
    
    if(currentIndex == 0){
      prev.classList.add('hidden');
    }
    if(currentIndex == slides.length - 1){
      next.classList.add('hidden');
    }
  }

  function moveSlides(){
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = 'translateX(' + -1 *  slideWidth * currentIndex + 'px)';
  }

  function setupDots(){
    for(let i = 0; i < slides.length ;i++){
      const button = document.createElement('button');
      button.addEventListener('click', function(){
        currentIndex = i;
        updateDots()
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('nav').appendChild(button);
    }

    dots[0].classList.add('current');
  }

  function updateDots(){
    dots.forEach(function(dot){
      dot.classList.remove('current');
    })
    dots[currentIndex].classList.add('current');
  }

  updateButtons();
  setupDots();

  next.addEventListener('click', function(){
    currentIndex += 1;
    updateDots()
    updateButtons();
    moveSlides();
  });
  
  prev.addEventListener('click', function(){
    const slideWidth = slides[0].getBoundingClientRect().width;
    currentIndex -= 1;
    updateDots()
    updateButtons();
    moveSlides();
  });

  // Windowsのサイズが変わったら次の処理を行う。
  window.addEventListener('resize', function(){
    moveSlides();
  })
}
