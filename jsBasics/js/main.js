"use strict";

{
  // //スプレッド構文
  // const otherScores = [10, 20];
  // const scores = [50, 80, 90, ...otherScores];
  // // console.log(scores);
  // ///これだけで完結する場合
  // function sum(a, b) {
  //   console.log(a + b);
  // }
  // sum(...otherScores);
  // ///関数の結果を利用したい場合
  // function sum2(a, b) {
  //   return a + b;
  // }
  //object.keys https://dotinstall.com/lessons/basic_javascript_objects_v2/52314
  // const point = {
  //   x: 100,
  //   y: 180,
  // };
  // const keys = Object.keys(point);
  // console.log(point);
  // keys.forEach(key => {
  //   console.log(`Keys: ${key} ${point[key]}`); //${point.key}？文字列ではない？
  // });
  // const points = [
  //   { x: 30, y: 50 },
  //   { x: 20, y: 90 },
  //   { x: 60, y: 70 },
  // ];
  // console.log(points[1].y);
  // alert("hello");
  // //https://dotinstall.com/lessons/basic_javascript_objects_v2/52324
  let i = 0;
  function setTimeout() {
    console.log(new Date());
    i++;
    if (i > 3) {
      clearInterval(intervalId);
    }
  }
  const intervalId = setInterval(setTimeout, 1000); //なぜこの位置なのか？

  //https://dotinstall.com/lessons/basic_javascript_objects_v2/52325
  function showTime() {
    console.log(new Date());
  }
  showTime(); //これでもいける？

  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount}likes`);
    }

    like() {
      this.likeCount++;
      this.show(); //これになるのが分からない
    }
    static showInfo() {
      console.log("Post class version 1.0");
    }
  }
  class SponsoredPost extends Post {
    constructor(text, sponsor) {
      super(text);
      this.sponsor = sponsor;
    }

    show() {
      super.show();
      console.log(`... sponsored by ${this.sponsor}`);
    }
  }
  const posts = [
    new Post("JavaScriptを勉強中..."),
    new Post("プログラミング楽しい！"),
    new SponsoredPost("3分動画でマスター", "dotinstall"),
  ];

  posts[2].show();
  posts[2].like();
}
