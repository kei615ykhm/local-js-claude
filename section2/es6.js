// // 関数宣言と関数式の違い

// // const rand = Math.floor(Math.random() * 10);    // 0〜9 のランダムな整数
// // const judge = if (rand % 2 === 0) `even` else `odd`;
// // const judge = if (rand % 2 === 0) `even` else `odd`;

// // // こんなことをしたら、Uncaught SyntaxError: Unexpected token 'if' と怒られる
// // // なぜなら、if は文であり、式ではないから
// // // なので、if 文を式に変換する必要がある

// // 三項演算子を使うと、評価は式なので、変数に代入できる

// const judge = rand % 2 === 0 ? `even` : `odd`;
// console.log(judge); // 'even' または 'odd'

// // このように、if 文を式に変換することで、関数式を使うことができる

// // 関数宣言文による定義
// function double(n) {
//   return n * 2;
// }

// // 関数式による定義
// const dbl = function (n) {
//   return n * 2;
// };

// // double と dbl は同じ関数を指す
// // 式の場合はセミコロンをつけるが、宣言文はつけない
// // また、関数宣言文は巻き上げが起こるが、関数式は起こらない

// // 関数宣言文の定義にはvarと同じく巻き上げが起こる

// function fn() {
//   return 'foo';
// }

// function fn() {
//   return 'bar';
// }

// console.log(fn()); // 'bar'

// // このように、再宣言できてしまう
// // これを防ぐためには、関数式を使う
// // また、関数宣言文は巻き上げが起こるため、コードの見通しが悪くなる

// // 第一級オブジェクトとしての関数

// function fn() {}
// fn.__proto__.constructor.name; // 'Function'
// fn.__proto__.__proto__.constructor.name; // 'Object'

// // JavaScriptでは関数は組み込みオブジェクト（Function）のインスタンスであり、オブジェクトとして扱うことができる

// // 第一級オブジェクトとは、他のオブジェクトの値と同様に、変数への代入、配列の要素やオブジェクトのプロパティとしての格納、関数の引数としての渡す、関数の戻り値として返す、などが可能なオブジェクトのこと
// // まとめると、JavaScriptにおける関数式とは、Functionオブジェクトを生成するリテラルであるということ

// // 注意点

// // Function インスタンスの生成
// const sum = new Function('n', 'm', 'return n + m;');

// // 関数式（＝関数リテラル）
// const add = function (n, m) {
//   return n + m;
// };

// // 関数の定義には、Function インスタンスの生成よりも関数式を使うことが一般的
// // なぜなら、Function インスタンスの生成は、文字列を直接JavaScriptのコードとして評価する必要があり、作られた関数が常にグローバルスコープで実行されるという問題があるため

// // 関数は第一級オブジェクトだが、任意のオブジェクトのプロパティになることもできる
// // 単にオブジェクトのプロパティになってる関数をメソッドと呼ぶ

// // メソッドとは、オブジェクトに紐づいた関数のこと

// const foo = {
//   bar: 'bar',
//   baz: function () {
//     console.log('I am `baz` method');
//   },
// };

// foo.baz(); // I am `baz` method

// // foo オブジェクトの baz プロパティは、メソッドとして定義されている

// // 簡略化したメソッドの定義

// const fuu = {
//   bar: 'bar',
//   baz() {
//     console.log('I am `baz` method');
//   },
// };

// fuu.baz(); // I am `baz` method

// // 結果は同じになる

// // アロー関数

// // function キーワードを使った物のほかに、アロー関数という関数の書き方がある（ES2015:ES5以降）

// // function キーワードによる関数式
// const plusOne = function (n) {
//   return n + 1;
// };

// // アロー関数式
// const addOne = (n) => {
//   return n + 1;
// };

// // アロー関数式、さらに省略記法
// const increment = (n) => n + 1;

// console.log(plusOne(4)); // 5
// console.log(addOne(4)); // 5
// console.log(increment(4)); // 5

// // 引数が一つの場合は括弧を省略でき、処理が一つの場合は return キーワードをブロックごと省略できる

// // ただし、Pettierでは、引数が一つの場合でも以下のように書いても括弧をつけるようになっている
// // const increment = n => n + 1;

// // 無名関数

// // 無名関数とは、名前を持たない関数のことで、関数式を使って定義する

// // 名前付きで定義した関数
// function mercury() {}
// mercury.name; // 宣言文で定義した関数の名前
// // 'mercury'

// const fn = function mars() {};
// fn.name; // 関数式で定義した関数の名前
// // 'mars'

// 関数の名前はFunctionオブジェクトのnameプロパティに格納されている
// しかし、名前を付けたところで変数に代入してしまえば、その名前はあまり意味を持たない

// // 無名関数の場合

// (function () {})();

// (() => {})().name;

// 名前がないからメモリに残らず、変数を代入されなければ、その関数は使い捨ての関数として使うことができる
// 無名関数の場合は、nameプロパティには空文字列が格納される

// 無名関数の例

// const jupiter = () => {
//   console.log('I am Jupiter!');
// };

// console.log(jupiter.name); // jupiter

// // 引数の表現のバリエーション

// // // デフォルト引数
// const raise = (n, m = 2) => n ** m;

// console.log(raise(2, 3)); // 8(2 ** 3)
// console.log(raise(3)); // 9 (3 ** 2)

// // // レストパラメータ

// const showNames = (a, b, ...rest) => {
//   console.log(a);
//   console.log(b);
//   console.log(rest);
// };

// showNames('Moon', 'Mercury', 'Mars', 'Jupiter', 'Venus');
// // Moon
// // Mercury
// // [ 'Mars', 'Jupiter', 'Venus' ]

// // // レストパラメータに任意の名前を付けて取得したい場合

// const sum = (i, ...[j, k, l]) => i + j + k + l;

// console.log(sum(1, 2, 3, 4)); // 10
// console.log(sum(1, 1, 1, 1, 1, 1)); // 4

// クロージャ

function outerFunction(x) {
  let outerVar = x;

  function innerFunction(y) {
    return outerVar + y; // outerVarにアクセス可能
  }

  return innerFunction;
}

const closure = outerFunction(10);
console.log(closure(5)); // 出力: 15
