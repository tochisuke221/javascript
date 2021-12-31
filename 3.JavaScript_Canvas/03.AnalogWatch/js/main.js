'use strict';

(() => {
  class ClockDrawer {
    constructor(canvas) {
      this.ctx = canvas.getContext('2d');
      this.width = canvas.width;
      this.height = canvas.height;
    }

    draw(angle, func) {
      //初期の座標空間を保存
      this.ctx.save();

      //座標空間を回転
      this.ctx.translate(this.width / 2, this.height / 2);
      this.ctx.rotate(Math.PI / 180 * angle);

      //funcの処理を実施
      this.ctx.beginPath();
      func(this.ctx);
      this.ctx.stroke();

      //初期の座標空間に戻す
      this.ctx.restore();
    }

    clear(){
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }

  class Clock {
    constructor(drawer) {
      this.r = 100;
      this.drawer = drawer;
    }

    //盤面を書く指示
    drawFace() {
      for (let angle = 0; angle < 360; angle += 6) {
        this.drawer.draw(angle, ctx => {
          ctx.moveTo(0, -this.r);
          if (angle % 30 === 0) {
            ctx.lineWidth = 2;
            ctx.lineTo(0, -this.r + 10);
            ctx.font = '13px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(angle / 30 || 12, 0, -this.r + 25);
          } else {
            ctx.lineTo(0, -this.r + 5);
          }
        });
      }
    }

    //針を書く指示
    drawHands(){
      //hour
      this.drawer.draw(this.h * 30 + this.m * 0.5, ctx=>{
        ctx.lineWidth = 6;
        ctx.moveTo(0, 10);
        ctx.lineTo(0, -this.r + 50);
      })
      //minutes
      this.drawer.draw(this.m * 6, ctx=>{
        ctx.lineWidth = 4;
        ctx.moveTo(0, 10);
        ctx.lineTo(0, -this.r + 30);
      })
      //minutes
      this.drawer.draw(this.s * 6, ctx=>{
        ctx.strokeStyle = 'red';
        ctx.moveTo(0, 20);
        ctx.lineTo(0, -this.r + 20);
      })
    }

    //時刻のアップデート
    update(){
      //現在時刻の取得
      this.h = (new Date).getHours();
      this.m = (new Date).getMinutes();
      this.s = (new Date).getSeconds();
    }

    run() {
      this.update();
      this.drawer.clear();
      this.drawFace();
      this.drawHands();

      setTimeout(() => {
        this.run();
      }, 1000);
    }
  }
  
  const canvas = document.querySelector('canvas');
  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  const clock = new Clock(new ClockDrawer(canvas));
  clock.run();
})();
