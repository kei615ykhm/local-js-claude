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

// 配列リテラル
const arr1 = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
arr1; // [1, 2, 3]

// オブジェクトリテラル
const obj1 = { key: 'value' };
const obj2 = new Object();
obj2.key = 'value';
obj1; // { key: 'value' }

// 正規表現リテラル
const reg1 = /pattern/;
const reg2 = new RegExp('pattern');
reg1; // /pattern/
