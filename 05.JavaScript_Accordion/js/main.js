'use strict'

{
  const dts = document.querySelectorAll('dt');

  dts.forEach(function(dt){
    dt.addEventListener('click', function(){
      dt.parentNode.classList.toggle('appear');

      dts.forEach(function(el){
        if(dt !== el){
          el.parentNode.classList.remove('appear');
        }
      });
    });
  });
}
