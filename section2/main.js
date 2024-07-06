// アロー関数の基本
// アロー関数はfunctionを省略して記述できる

// 通常の関数
function add(a, b) {
  return a + b;
}

// アロー関数
const add = (a, b) => a + b;

// 単一の引数の場合は()を省略できる
// また、returnも省略できる
const double = (a) => a * 2;

// 単一のパラメータの場合は()を省略できる
// 複数のパラメータの場合は()が必要
const square = (a) => a * 2;
