// // 配列の基礎

// // 配列の作成
// const fruits = ['りんご', 'バナナ', 'オレンジ'];

// // fruitsという変数は果物の名前を格納する配列を表すために使われる

// // 配列メソッド

// // 要素を最後尾に追加する pushメソッド

// fruits.push('ぶどう');
// console.log(fruits); // ['りんご', 'バナナ', 'オレンジ', 'ぶどう']

// // 最後尾の要素を削除する popメソッド

// const lastFruit = fruits.pop();
// console.log(lastFruit); // 'ぶどう'
// console.log(fruits); // ['りんご', 'バナナ', 'オレンジ']

// // 要素を先頭に追加する unshiftメソッド

// fruits.unshift('いちご');
// console.log(fruits); // ['いちご', 'りんご', 'バナナ', 'オレンジ']

// // 先頭の要素を削除して返す shiftメソッド

// const firstFruit = fruits.shift();
// console.log(firstFruit); // 'いちご'
// console.log(fruits); // ['りんご', 'バナナ', 'オレンジ']

// // 要素を指定した位置に追加する spliceメソッド

// const slicedFruits = fruits.slice(1, 3);
// console.log(slicedFruits); // ['バナナ', 'オレンジ']
// console.log(fruits); // ['りんご', 'バナナ', 'オレンジ'] (元の配列は変更されない)

// 配列の繰り返し処理

// // for文を使った繰り返し処理

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// // forEachメソッドを使った繰り返し処理

// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });

// // アロー関数を使用した簡潔な書き方
// fruits.forEach((fruit) => console.log(fruit));

// // for...of文を使った繰り返し処理(ES6以降)

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// 実践的な使用例

// 配列の要素をフィルタリングする

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// 配列の要素を変換する

const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// 配列の要素の合計を計算する

const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 55
