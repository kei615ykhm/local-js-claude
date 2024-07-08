// オブジェクトの基礎

// 基本的なオブジェクトの作成と操作

// オブジェクトリテラル記法
let person = {
  name: '太郎',
  age: 30,
  city: '東京',
};

// プロパティへのアクセス

// ドット記法
console.log(person.name); // "太郎"

// ブラケット記法
console.log(person['age']); // 30

// プロパティの変更
person.age = 31;

// 新しいプロパティの追加

person.job = 'エンジニア';

// プロパティの削除

// delete person.city;

// プロパティとメソッド

// プロパティとは特性を表す値のこと
// メソッドとはオブジェクトに属する関数のこと

let car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2021,
  start: function () {
    console.log('エンジンを始動します');
  },
};

console.log(car.brand); // "Toyota"
car.start(); // "エンジンを始動します"

// オブジェクトの繰り返し処理（for...in）

for (let key in person) {
  console.log(key + ': ' + person[key]);
}

// 出力結果
// name: 太郎
// age: 31
// city: 東京
// job: エンジニア
