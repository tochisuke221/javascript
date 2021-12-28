'use strict'

{
  function setWord(){
    //spliceの返り値は配列となる
    word = words.splice(Math.floor(Math.random()* words.length), 1)[0];
    target.textContent = word;
    loc = 0
  }

  const target = document.getElementById('target');
  const words = [ "red", "pink", "blue"]
  let word;
  let loc = 0;
  let startTime;
  let isPlaying = false;
  
  document.addEventListener('click', function(){
    if(isPlaying){
      return
    }
    
    isPlaying = true;
    startTime = Date.now();
    setWord();
  });

  document.addEventListener('keydown', function(e){
    if(e.key !== word[loc]){ return } 

    loc++;
    target.textContent = '_'.repeat(loc) + word.substring(loc);

    if(loc === word.length){
      if(words.length === 0){
        const elapsedTime = (( Date.now() - startTime ) / 1000 ).toFixed(2);
        const result = document.getElementById('result');

        result.textContent = 'finish' + elapsedTime + 'seconds!!';
        return 
      }

      setWord();
      
    }

  });




}
