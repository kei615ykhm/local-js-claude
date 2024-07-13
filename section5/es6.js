// クラス構文のサンプルコード

// // ES5のクラス構文
class Bird {
  #className = '鳥類';

  // コンストラクタ
  constructor(name) {
    // プロパティ
    this.name = name;
  }

  // 静的メソッド
  static explain() {
    // 静的メソッドの中では、thisはクラス自体を指す
    console.log('これは鳥のクラスです');
  }

  // メソッド
  cry(sound) {
    // メソッドの中では、thisはインスタンスを指す
    console.log(`${this.name}が「${sound}」と鳴きました`);
  }

  // メソッド
  introduce() {
    // メソッドの中では、thisはインスタンスを指す
    console.log(`私は${this.#className}の${this.name}です`);
  }
}

// // ES6のクラス構文

// // Birdクラスを継承したFlyableBirdクラス
class FlyableBird extends Bird {
  // コンストラクタ
  constructor(name) {
    // 親クラスのコンストラクタを呼び出す
    super(name);
  }

  // メソッド
  fly() {
    // メソッドの中では、thisはインスタンスを指す
    console.log(`${this.name}が飛びました`);
  }
}

// // 静的メソッドを呼び出す
Bird.explain(); // これは鳥のクラスです

// // インスタンスを生成
const penguin = new Bird('ペンギン');

// // メソッドを呼び出す
penguin.introduce(); // 私は鳥類のペンギンです

// // インスタンスを生成
const hawk = new FlyableBird('タカ');

// // メソッドを呼び出す
hawk.cry('ピィィー'); // タカが「ピィィー」と鳴きました

// // メソッドを呼び出す
hawk.fly(); // タカが飛びました

// es6は何が変わったのか？

// classキーワードで直感的なクラス定義ができるようになった

// ES5
function Bird(name) {
  this.name = name;
}

Bird.prototype.cry = function (sound) {
  console.log(this.name + 'が「' + sound + '」と鳴きました');
};

// ES6
class Bird {
  constructor(name) {
    this.name = name;
  }

  cry(sound) {
    console.log(`${this.name}が「${sound}」と鳴きました`);
  }
}

// constructorでコンストラクタの明示的な定義ができるようになった
// constructor(name) { の部分

// 継承の簡略化

// ES6の継承
class FlyableBird extends Bird {
  fly() {
    console.log(`${this.name}が飛びました`);
  }
}

// superキーワードで親クラスのコンストラクタを呼び出せるようになった

class FlyableBird extends Bird {
  constructor(name) {
    super(name); // 親クラスのコンストラクタを呼び出す
  }
}

// staticクラスを使って静的メソッドを定義できるようになった

class Bird {
  static explain() {
    console.log('これは鳥のクラスです');
  }
}

Bird.explain(); // これは鳥のクラスです

// #プライベートフィールドを使って、クラス内でのみアクセスできるフィールドを定義できるようになった

class Bird {
  #className = '鳥類';

  introduce() {
    console.log(`私は${this.#className}の${this.name}です`);
  }
}
