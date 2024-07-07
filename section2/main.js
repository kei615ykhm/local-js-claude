// アロー関数の基本
// アロー関数はfunctionを省略して記述できる

// 通常の関数
// function add(a, b) {
//   return a + b;
// }

// // アロー関数
// const add = (a, b) => a + b;

// // 単一の引数の場合は()を省略できる
// // また、returnも省略できる
// const double = (a) => a * 2;

// // 単一のパラメータの場合は()を省略できる
// // 複数のパラメータの場合は()が必要
// const square = (a) => a * 2;

// thisのバインド

// thisとは、関数が呼び出された際に、その関数がどのオブジェクトに属しているかを示すキーワード

// アロー関数自体はthisを持たず、外側の（定義された）スコープのthisを参照する
// これにより、従来の関数で発生していたthisのバインドの問題を解決することができる

// 通常の関数
// const obj = {
//   name: 'Alice',
//   greet: function () {
//     setTimeout(function () {
//       console.log(`Hello, ${this.name}`);
//     }, 1000);
//   },
// };

// const obj = {
//   name: 'Alice',
//   greet: function () {
//     setTimeout(() => {
//       console.log(`Hello, ${this.name}`);
//     }, 1000);
//   },
// };

// 通常の関数と違い、アロー関数はargumentsObjectを持たない
// コンストラクタとして使用することはできない
// yieldを使用することはできない
// アロー関数は関数式でしか使用できない

// 使用例

// 配列メソッドとの組み合わせ

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map((x) => x * x);

// オブジェクトメソッドの短縮記法

const person = {
  name: 'Bob',
  sayHello: () => console.log(`Hello, I'm ${this.name}`), // 注意: this は期待通りに動作しません
};

// 簡単な計算

// 従来の関数
function add(a, b) {
  return a + b;
}

// アロー関数
const addArrow = (a, b) => a + b;

console.log(addArrow(5, 3)); // 出力: 8
