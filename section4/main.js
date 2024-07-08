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
