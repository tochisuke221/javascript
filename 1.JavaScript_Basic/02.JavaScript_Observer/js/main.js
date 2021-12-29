'use strict';

{
  const targets = document.querySelectorAll('img');

  function callback(entries, obs) {
    console.log(entries);

    //entriesは最初は全ての監視対象を見ているが、
    //その後は、交差した対象のみが入ってくる

    entries.forEach(function(entry){
      if (!entry.isIntersecting) {
        return;
      }
  
      entry.target.classList.add('appear');
  
      // if (entries[0].isIntersecting) {
      //   entries[0].target.classList.add('appear');
      // } else {
      //   entries[0].target.classList.remove('appear');
      // }
  
      //ふわっと表示させたら監視を外す
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach(function(target){
    observer.observe(target);
  })
}
