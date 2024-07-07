// 変数とデータ型　型の確認方法

// typeof演算子とは、データ型を返す演算子
// typeof 演算子の後に変数や値を指定すると、そのデータ型を返す
// tデータ型を返すので、データ型を確認する際に使用する

// let num = 42;
// let str = 'Hello';
// let bool = true;

// console.log(typeof num); // number
// console.log(typeof str); // string
// console.log(typeof bool); // boolean

// 変数の型を確認する目的は、データ型によって処理を分岐させるため
// if文を使って、データ型によって処理を分岐させることができる

// 基本的な使用方法

// console.log(typeof 42); // "number"
// console.log(typeof 'hello'); // "string"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object" なぜかnullは"object"と表示される
// console.log(typeof {}); // "object"
// console.log(typeof []); // "object"
// console.log(typeof function () {}); // "function"

// // 注意点
// // nullは"object"と表示される

// console.log(typeof null); // "object"

// // 厳密に確認する場合は、nullかどうかを判定する必要がある

// let value = null;
// console.log(value === null); // true

// 配列の扱い

// 配列は、typeof演算子でデータ型を確認すると"object"と表示される

// let arr = [1, 2, 3];
// console.log(typeof arr); // "object"
// console.log(Array.isArray(arr)); // true

// 実践的な型のチェック

// function processValue(value) {
//   if (typeof value === 'number') {
//     return value * 2;
//   } else if (typeof value === 'string') {
//     return value.toUpperCase();
//   } else {
//     return 'Unsupported type';
//   }
// }

// console.log(processValue(5)); // 10
// console.log(processValue('hello')); // "HELLO"
// console.log(processValue(true)); // "Unsupported type"

// 未定義のチェック

function safeDivide(a, b) {
  if (typeof b === 'undefined' || b === 0) {
    return 'Cannot divide by zero or undefined';
  }
  return a / b;
}

console.log(safeDivide(10, 2)); // 5
console.log(safeDivide(10, 0)); // "Cannot divide by zero or undefined"
console.log(safeDivide(10)); // "Cannot divide by zero or undefined"
