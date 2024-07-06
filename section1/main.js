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

console.log(typeof 42); // "number"
console.log(typeof 'hello'); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" なぜかnullは"object"と表示される
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"
