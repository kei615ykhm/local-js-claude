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
