// // ラッパーオブジェクト
// // プリミティブ型の値に対して、メソッドを呼び出すときに、一時的にオブジェクトに変換される

// // プリミティブ型の値
// const str1 = 'Serval';
// // ラッパーオブジェクト
// const str2 = new String('Serval');
// // プリミティブ型の値とラッパーオブジェクトは異なる
// str1 === str2; // false
// // プリミティブ型の値とラッパーオブジェクトの値は同じ
// str1 === str2.valueOf(); // true

// オブジェクト型とそのリテラル

// // 配列リテラル
// const arr1 = [1, 2, 3];
// const arr2 = new Array(1, 2, 3);
// arr1; // [1, 2, 3]

// // オブジェクトリテラル
// const obj1 = { key: 'value' };
// const obj2 = new Object();
// obj2.key = 'value';
// obj1; // { key: 'value' }

// // 正規表現リテラル
// const reg1 = /pattern/;
// const reg2 = new RegExp('pattern');
// reg1; // /pattern/

// 具体的な実例

// const arr1 = [1, 2, 3];
// const arr2 = new Array(1, 2, 3);
// console.log(arr1, arr2); // [1, 2, 3] [1, 2, 3]

// const obj1 = {};
// const obj2 = new Object();
// console.log(obj1, obj2); // {} {}

// const regex1 = /pattern/;
// const regex2 = new RegExp('pattern', 'i');
// console.log(regex1, regex2); // /pattern/ /pattern/i

// 狭義のオブジェクトと広義のオブジェクト

// // 狭義のオブジェクト
// const obj1 = {};
// // 広義のオブジェクト
// const obj2 = new Object();

// オブジェクトとは通常、キーとそれに対応する値を保持するデータ構造のことを指す（連想配列）

// 狭義のオブジェクトは、多くの場合JSON形式のオブジェクトを指す

// 広義のオブジェクトは、狭義のオブジェクトに加えて、配列や関数、正規表現なども含む

// 説明

// // 狭義のオブジェクト
const obj1 = { a: 265 };
// // 広義のオブジェクト
const arr = [7, 8, 9];
// // 狭義のオブジェクト
const regex = /pattern/gi;

// プリミティブ型の値に対して、メソッドを呼び出すときに、一時的にオブジェクトに変換される
obg.__proto__.__constructor.name; // Object

// プリミティブ型の値とラッパーオブジェクトは異なる
arr.__proto__.__constructor.name; // Array

// プリミティブ型の値とラッパーオブジェクトの値は同じ
regex.__proto__.constructor.name; // RegExp

// オブジェクト型とそのリテラル
regex.__proto__.__proto__.constructor.name; // Object

// オブジェクトのインスタンスプロパティ__proto__にはオブジェクトが何を下敷きにしているかが格納されている
// オブジェクトのプロトタイプチェーンをたどると、Objectコンストラクタ関数が見つかる
// これは、JavaScriptのすべてのオブジェクトはObjectコンストラクタ関数を継承しているため
// 関数の定義へ続く
