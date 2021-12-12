'use strict'

// const signal = "tochikawa";

// switch(signal){
//   case 'red':
//     console.log("red");
//     break;
//   case 'red':
//     console.log("red");
//     break;
//   case 'red':
//     console.log("red");
//     break;
//   default:
//     console.log("default");
//     break;
// }


// for(let i=1; i<=10;i++){
//   console.log("繰り返し処理"  + i + "回目");
//   console.log(`テンプレートリテラル${i}`);
// }

// // let hp = 100;
// // while(hp>0){
// //   console.log(`まだHPは${hp}残っている`);
// //   hp-=15;
// // }

// let hp = -50
// do {
//   console.log(`まだHPは${hp}残っている`);
//   hp-=15;
// }while(hp>0);

// console.log(`まだHPは${hp}残っている`);

// for(let i=0; i<=10; i++){
//   if(i === 4){
//     break;
//   }
//   console.log(i);
// }

// // 関数  
  
// function showAd(message){
//   console.log('----------');
//   console.log(`--- ${message} ---`);
//   console.log('----------');
// }

// showAd('Header Ad');


// // function sum(a, b, c){
// //   return a + b + c;
// // // }

// // const sum = function(a, b, c){
// //   return a + b + c;
// // };

// // const total = sum(1,2,3) + sum(2,3,4);

// // console.log(total);


// // //アロー関数
//  const sum = (a, b, c) => a+ b+ c;
// // const double = a => a*2;

// const scores = [10, 20, 40];

// console.log(scores);
// console.log(scores.splice(1,0,20,30));
// console.log(scores);

// //スプレッド構文

// {
//   const otherScores = [10, 20];
//   const scores = [80, 90, 40, 70, ...otherScores];
//   // console.log(scores);

//   function sum(a, b, c) {
//     console.log(a + b + 10);
//   }

//   sum(...otherScores);
//   // sum(10, 20);
// }

// //分割代入

// let [a,b, ...other] = [1,2,3,4,5]

// {
//   const scores = [1,2,3,4,5];

//   scores.forEach(function(score, i){
//     console.log(`${i}: ${score}`);
//   });
// }

// {
//   const prices = [20, 30, 40];

//   const updatePrice = prices.map(function(p){
//      return p + 20 ;
//   });

//   console.log(updatePrice);
// }

// {
//   const numbers = [1,2,3,4,5,6,7]

//   const evenNumbers = numbers.filter(function(n){
//       return n%2 ===0
//   });

//   console.log(evenNumbers);
// }

// //オブジェクト構文

// {
//   const otherProps ={
//     r: 4,
//     color: 'red',
//   }
//   const point = {
//     x: 100,
//     y: 180,
//     ...otherProps,
//   };

//   // console.log(point.x);
//   // console.log(point['x']);

//   // point.x = 300;

// //   point.z = 210;
// //   delete point.y;
// //   console.log(point);
// //
//   const{x, r, ...others} = point;
//   console.log(x);
//   console.log(r);
//   console.log(others);

//   const keys = Object.keys(point);

//   keys.forEach(function(key){
//     console.log(point[key]);
//   });

//   const points =[
//     {x: 20, y:40},
//     {x: 30, y:50},
//     {x: 40, y:60},
//   ]

//   // console.log(point[1].y);
// }

// {
//   let x = [1, 2];
//   let y = [...x]; //参照渡しではなくなる
// }

// {
//   const str = 'hello';
//   str.length;
//   str.substring(2,4);//終了位置の手前まで
// }

// {
//   const d = [2019, 11, 12];

//   console.log(d.join(''));
//   console.log(d.join('/'));

//   const t = '17:08:24';

//   console.log(t.split(':'));

//   const [hour, minute, second] = t.split(':');
// }

// {
//   const scores = [10, 3, 40];

//   let sum = 0;
  
//   scores.forEach(function(n){
//     sum += n;
//   });

//   const avg = sum / scores.length;
  
//   // console.log(Math.floor(avg));
//   // console.log(Math.ceil(avg));
//   // console.log(Math.round(avg));
//   // console.log(Math.toFix(3));

  
// }

// // {
// //   Math.floor(Math.random * 6) + 1; //さいころ
// // }

// // {
// //   const d = new Date();

// //   d.getFullYear();
// //   d.getMonth();
// //   d.getDate();
// //   d.getDay();
// //   d.getHours();
// //   d.getMinutes();
// //   d.getSeconds();
// //   d.getMilliSeconds();

// // }

// // {
// //   alert('危険です');

// //   const answer = confirm('さくじょしますか?');
// //   if(answer){
// //     console.log('削除しました');
// //   }else{
// //     console.log('キャンセルしました');
// //   }

// // }

// // {
// //   let i = 0
// //   function showTime(){
// //     console.log(new Date());
// //     i++;
// //     if(i >2){
// //       clearInterval(intervalId);
// //     }
// //   }

// //   const intervalId = setInterval(showTime, 1000);
// // }

// // {
// //   function showTime(){
// //     console.log(new Date());
// //     const timeoutId = setTimeout(showTime, 1000);
// //     i++;
// //     if(i > 2){
// //       clearTimeout(timeoutId);
// //     }
// //   }
// //   showTime();
// // }


// {
//   const name = 23;
//   try{
//     console.log(name.toLocaleUpperCase());
//   } catch(e){
//     // console.log(e);
//   }

//   console.log('終了');
// }


// // クラスについて
// {
//  const posts = [
//    {
//      text: '投稿1',
//      likeCount: 0,
//      show(){
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//      },
//    },
//    {
//      text: '投稿2',
//      likeCount: 0,
//    }
//  ];


// }



// {
//   class Post{
//     constructor(text){
//       this.text = text;
//       this.likeCount = 0;
//     }

//     show(){
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//     }
//   }

//   const posts = [
//     new Post('初めての投稿'),
//     new Post('プログラミング楽しい'),
//   ];

//   posts[0].show();
//   posts[1].show();

// }


//カプセル化


// {
//   class Post{
//     constructor(text){
//       this.text = text;
//       this.likeCount = 0;
//     }

//     show(){
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//     }

//     like(){
//       this.likeCount++;
//       this.show();
//     }
//   }

//   const posts = [
//     new Post('初めての投稿'),
//     new Post('プログラミング楽しい'),
//   ];

//   posts[0].show();
//   posts[0].like();
//   posts[1].show();

// }

//静的メソッド

// {
//   class Post{
//     constructor(text){
//       this.text = text;
//       this.likeCount = 0;
//     }

//     show(){
//       console.log(`${this.text} - ${this.likeCount}いいね`);
//     }

//     like(){
//       this.likeCount++;
//       this.show();
//     }

//     //静的メソッド
//     //thisは使えない。
//     static showInfo(){
//       console.log('Post class version 1.0');
//     }
//   }

//   const posts = [
//     new Post('初めての投稿'),
//     new Post('プログラミング楽しい'),
//   ];


//   Post.showInfo();


// }

//クラスの拡張

// {
//   class Post {
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount} likes`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }
//   }

//   class SponsoredPost {
//     constructor(text, sponsor) {
//       this.text = text;
//       this.likeCount = 0;
//       this.sponsor = sponsor;
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount} likes`);
//       console.log(`... sponsored by ${this.sponsor}`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }
//   }

//   const posts = [
//     new Post('JavaScriptの勉強中…'),
//     new Post('プログラミング楽しい！'),
//     new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
//   ];

//   posts[2].show();
//   posts[2].like();
// }

// クラスの継承

// {
//   class Post {
//     constructor(text) {
//       this.text = text;
//       this.likeCount = 0;
//     }

//     show() {
//       console.log(`${this.text} - ${this.likeCount} likes`);
//     }

//     like() {
//       this.likeCount++;
//       this.show();
//     }
//   }

//   class SponsoredPost extends Post {
//     constructor(text, sponsor) {
//       super(text)
//       this.sponsor = sponsor;
//     }

//     show() {
//       super.show();
//       console.log(`... sponsored by ${this.sponsor}`);
//     }
//   }

//   const posts = [
//     new Post('JavaScriptの勉強中…'),
//     new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
//   ];

//   posts[1].show();
//   posts[1].like();
// }

//DOMについて

