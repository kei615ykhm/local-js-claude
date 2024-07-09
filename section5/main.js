// クラスの定義

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  describe() {
    return `This car is a ${this.brand} ${this.model}.`;
  }
}

// クラスの使用

let myCar = new Car('Toyota', 'Corolla');
console.log(myCar.describe()); // 出力: "This car is a Toyota Corolla."

// コンストラクタ

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let person1 = new Person('Alice', 30);
console.log(person1.name); // 出力: "Alice"
console.log(person1.age); // 出力: 30

// 継承の基本

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let dog = new Dog('Buddy');
dog.speak(); // 出力: "Buddy barks."

// 配列とクラスの違い

// 配列の例：学生のリスト

let students = ['山田', '田中', '佐藤', '鈴木'];
console.log(students[0]); // 出力: "山田"

// クラスの例：学生の詳細情報を含むリスト

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  introduce() {
    console.log(
      `私は${this.name}です。${this.age}歳で、${this.grade}年生です。`
    );
  }
}

let yamada = new Student('山田', 15, 2);
yamada.introduce(); // 出力: "私は山田です。15歳で、2年生です。"

// コンストラクタの基本的な使い方

class House {
  constructor(rooms, color) {
    this.rooms = rooms;
    this.color = color;
    this.isLocked = false; // デフォルト値の設定
  }

  lock() {
    this.isLocked = true;
    console.log('家をロックしました。');
  }
}

// コンストラクタを使ってオブジェクトを作成
let myHouse = new House(3, '白');
console.log(myHouse.rooms); // 出力: 3
console.log(myHouse.color); // 出力: "白"

myHouse.lock(); // 出力: "家をロックしました。"

// バリデーションの追加

class Curry {
  constructor(type, spiceLevel, mainIngredients) {
    this.type = type;
    this.spiceLevel = spiceLevel;
    this.mainIngredients = mainIngredients;
  }

  describe() {
    return `これは${this.spiceLevel}の${this.type}カレーです。主な具材は${this.mainIngredients.join(', ')}です。`;
  }
}

// 様々なカレーを作成
let beefCurry = new Curry('ビーフ', '中辛', ['牛肉', '玉ねぎ']);
let veggieCurry = new Curry('夏野菜', '甘口', [
  'ナス',
  'ズッキーニ',
  'パプリカ',
]);
let spicyCurry = new Curry('スパイシーチキン', '激辛', ['鶏肉', '唐辛子']);

console.log(beefCurry.describe());
console.log(veggieCurry.describe());
console.log(spicyCurry.describe());

// 変更する例

// クラスの定義を変更して、たとえば全てのカレーにカロリーを追加してみる。

class Curry {
  constructor(type, spiceLevel, mainIngredients, calories) {
    // ... 既存のコード ...
    this.calories = calories;
  }

  describe() {
    return `${this.type}カレー（${this.calories}kcal）: ${this.spiceLevel}、具材は${this.mainIngredients.join(', ')}です。`;
  }
}
