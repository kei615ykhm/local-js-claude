// 関数宣言と関数式の違い

// const rand = Math.floor(Math.random() * 10);    // 0〜9 のランダムな整数
// const judge = if (rand % 2 === 0) `even` else `odd`;
// const judge = if (rand % 2 === 0) `even` else `odd`;

// // こんなことをしたら、Uncaught SyntaxError: Unexpected token 'if' と怒られる
// // なぜなら、if は文であり、式ではないから
// // なので、if 文を式に変換する必要がある

// 三項演算子を使うと、評価は式なので、変数に代入できる

const judge = rand % 2 === 0 ? `even` : `odd`;
console.log(judge); // 'even' または 'odd'

// このように、if 文を式に変換することで、関数式を使うことができる

// 関数宣言文による定義
function double(n) {
  return n * 2;
}

// 関数式による定義
const dbl = function (n) {
  return n * 2;
};

// double と dbl は同じ関数を指す
// 式の場合はセミコロンをつけるが、宣言文はつけない
// また、関数宣言文は巻き上げが起こるが、関数式は起こらない

// 関数宣言文の定義にはvarと同じく巻き上げが起こる

function fn() {
  return 'foo';
}

function fn() {
  return 'bar';
}

console.log(fn()); // 'bar'

// このように、再宣言できてしまう
// これを防ぐためには、関数式を使う
// また、関数宣言文は巻き上げが起こるため、コードの見通しが悪くなる

// 第一級オブジェクトとしての関数

function fn() {}
fn.__proto__.constructor.name; // 'Function'
fn.__proto__.__proto__.constructor.name; // 'Object'

// JavaScriptでは関数は組み込みオブジェクト（Function）のインスタンスであり、オブジェクトとして扱うことができる

// 第一級オブジェクトとは、他のオブジェクトの値と同様に、変数への代入、配列の要素やオブジェクトのプロパティとしての格納、関数の引数としての渡す、関数の戻り値として返す、などが可能なオブジェクトのこと
// まとめると、JavaScriptにおける関数式とは、Functionオブジェクトを生成するリテラルであるということ

// 注意点

// Function インスタンスの生成
const sum = new Function('n', 'm', 'return n + m;');

// 関数式（＝関数リテラル）
const add = function (n, m) {
  return n + m;
};

// 関数の定義には、Function インスタンスの生成よりも関数式を使うことが一般的
// なぜなら、Function インスタンスの生成は、文字列を直接JavaScriptのコードとして評価する必要があり、作られた関数が常にグローバルスコープで実行されるという問題があるため

// 関数は第一級オブジェクトだが、任意のオブジェクトのプロパティになることもできる
// 単にオブジェクトのプロパティになってる関数をメソッドと呼ぶ

// メソッドとは、オブジェクトに紐づいた関数のこと

const foo = {
  bar: 'bar',
  baz: function () {
    console.log('I am `baz` method');
  },
};

foo.baz(); // I am `baz` method

// foo オブジェクトの baz プロパティは、メソッドとして定義されている

// 簡略化したメソッドの定義

const fuu = {
  bar: 'bar',
  baz() {
    console.log('I am `baz` method');
  },
};

fuu.baz(); // I am `baz` method

// 結果は同じになる
