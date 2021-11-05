"use strict";
// document.querySelector(".apple").addEventListener("click", () => {
//   alert("apple");
// });
// setTimeout(() => {
//   alert("2秒後です");
// }, 3000);

// let fruits = ["リンゴ", "メロン", "バナナ"];
// alert(fruits[1]);

// function textContent(text) {
//   return `なるほど！${text}なんですね！`;
// }
// alert(textContent("あああ"));

//https://ninjacode.work/course/JavaScript/2/7
// const bgBox = document.getElementsByTagName("li");
// if (bgBox.style.background === "rgb(255, 0, 0)") {
//   document.bgBox.addEventListener("click", () => {
//     bgBox.style.background === "rgb(0, 0,255)";
//   });
// }

// const now = new Date();
// const now_month = now.getMonth() + 1;

// function month_judge(month) {
//   if (now_month === month) {
//     alert("今月の月です！");
//   } else {
//     alert("今月の月ではありません");
//   }
// }
// month_judge(11);

let target_str = "忍者CODE";
function ninja_judge(str) {
  if (str.indexOf(target_str) != -1) {
    //なぜ否定なの？
    //.includeは？
    console.log("含む");
  }
}
ninja_judge("おはよう忍者CODE");

// let ninja = "28";
// ninja = Number(ninja);
// console.log(typeof ninja);

// function my_uppercase(str) {
//   console.log(str.toUpperCase());
// }
// my_uppercase("ninja");

// let my_array = [2, 19, 59, 203, 5];
// console.log(Math.min(...my_array));

// document
//   .querySelector(".double")
//   .addEventListener("dblclick", () => console.log("ダブルclickされました!"));

// let ninja = [2, 34, 561, 5, 14];
// let futaketa = ninja.filter(item => {
//   return String(item).length == 2;
// });
// console.log(futaketa);

// let ninja = [5, 6, 3];
// const judge = ninja.every(item => {
//   return typeof item == "number";
// });
// console.log(judge);

// function ninja(str) {
//   if (str.length > 5) {
//     console.log(str);
//   }
// }
// ninja("忍者CODE");
// let fruits = ["りんご", "みかん", "バナナ"];
// function judge(str) {
//   return fruits.indexOf(str) >= 0 ? true : false;
// }
// console.log(judge("パイナップル"));

const my_array = ["忍者", "CO", "DE"];
function judge(my_array) {
  let res = null; //？
  const array_string = my_array.every(item => {
    return typeof item == "string";
  });

  if (array_string) {
    res = my_array.join("");
  } else {
    res = my_array.reduce(function (p, c) {
      return p + c; //？
    });
  }
}
console.log(judge(my_array));
