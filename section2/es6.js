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
