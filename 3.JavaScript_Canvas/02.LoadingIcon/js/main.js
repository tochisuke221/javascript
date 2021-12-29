'use strict';

(() => {

  class IconDrawer{
    constructor(canvas){
      this.ctx = canvas.getContext('2d');
      this.width = canvas.width;
      this.height = canvas.height;
      this.r = 60; //円の半径
    }

    draw(angle){

      //領域を半透明の白で覆うことで消えるように見える
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      this.ctx.fillRect(0, 0, this.width, this.height);

      //座標空間がずれる前を保存
      this.ctx.save();

      //座標空間の中心を円の中心にする
      this.ctx.translate(this.width / 2, this.height/ 2);

      this.ctx.rotate(angle * Math.PI/180);

      //円を回る点々
      this.ctx.beginPath();
      this.ctx.moveTo(0, -this.r - 5);
      this.ctx.lineTo(0, -this.r + 5);
      this.ctx.strokeStyle = 'orange';
      this.ctx.lineWidth = 6;
      this.ctx.stroke();

      this.ctx.restore();
    }
  }
  
  class Icon{
    constructor(drawer){
      this.drawer = drawer;
      this.angle = 0;//点々1つ1つの角度
    }

    draw(){
      this.drawer.draw(this.angle);
    }

    update(){
      this.angle += 12;
    }

    run(){
      this.update();
      this.draw();

      setTimeout(() => {
        this.run();
      }, 100);
    }
  }

  //main

  const canvas = document.querySelector('canvas');
  if(typeof canvas.getContext === 'undefined'){
    return;
  }

  const icon = new Icon(new IconDrawer(canvas));
  icon.run();
})();
