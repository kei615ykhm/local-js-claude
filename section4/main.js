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

// for...inの繰り返しループの詳細説明

// 基本構文

for (let key in object) {
  // オブジェクトのプロパティに対する処理
}

// 具体的な使い方

// データの表示

let person = { name: '太郎', age: 30, city: '東京' };
for (let key in person) {
  console.log(key + ': ' + person[key]);
}

// データの変換

let prices = { apple: 100, banana: 80, orange: 120 };
for (let item in prices) {
  prices[item] *= 1.1; // 10%値上げ
}

// データの集計

let sales = { monday: 150, tuesday: 200, wednesday: 180 };
let total = 0;
for (let day in sales) {
  total += sales[day];
}
console.log('Total sales: ' + total);

// 特定の条件に基づくフィルタリング処理

let inventory = { apples: 5, bananas: 0, oranges: 3 };
let inStock = [];
for (let fruit in inventory) {
  if (inventory[fruit] > 0) {
    inStock.push(fruit);
  }
}
console.log('In stock: ' + inStock.join(', '));

// フィルタリングの実用例

let articles = [
  {
    id: 1,
    title: 'JavaScriptの基礎',
    tags: ['プログラミング', 'JavaScript', '入門'],
  },
  {
    id: 2,
    title: 'Reactの使い方',
    tags: ['プログラミング', 'JavaScript', 'React', 'フレームワーク'],
  },
  {
    id: 3,
    title: '効果的なSEO対策',
    tags: ['マーケティング', 'SEO', 'Webサイト'],
  },
  {
    id: 4,
    title: 'モダンなCSS技法',
    tags: ['プログラミング', 'CSS', 'Web開発'],
  },
];

function filterArticlesByTag(articles, targetTag) {
  let filteredArticles = [];
  for (let i in articles) {
    let article = articles[i];
    for (let j in article.tags) {
      if (article.tags[j].toLowerCase() === targetTag.toLowerCase()) {
        filteredArticles.push(article);
        break; // 一致するタグが見つかったらこの記事のループを抜ける
      }
    }
  }
  return filteredArticles;
}

let javascriptArticles = filterArticlesByTag(articles, 'JavaScript');
console.log(javascriptArticles);
// 出力: [
//   { id: 1, title: "JavaScriptの基礎", tags: ["プログラミング", "JavaScript", "入門"] },
//   { id: 2, title: "Reactの使い方", tags: ["プログラミング", "JavaScript", "React", "フレームワーク"] }
// ]
