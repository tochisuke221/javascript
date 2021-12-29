'use strict'

{
  let t = 0;
  function draw(){
    const canvas = document.querySelector('canvas');
    //サポートされていなかったら早期リターン
    if(typeof canvas.getContext === 'undefined'){ return; }

    const ctx = canvas.getContext('2d');

    const CANVAS_WIDTH = 600;
    const CANVAS_HEIGHT = 240;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = CANVAS_WIDTH * dpr;
    canvas.height = CANVAS_HEIGHT * dpr;

    ctx.scale(dpr, dpr);
    canvas.style.width = CANVAS_WIDTH + 'px';
    canvas.style.height = CANVAS_HEIGHT + 'px';

    ctx.font = 'bold 48px Verdana';
    ctx.strokeText('Tokyo', 100, 100);
  }

  draw();
}
