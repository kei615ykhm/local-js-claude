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
