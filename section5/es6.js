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
