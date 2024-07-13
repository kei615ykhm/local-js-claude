// 分割代入の簡単な例

// // オブジェクトリテラル

// 追記：下記の例はオブジェクトリテラルの複雑な例で、古いブラウザでは動作しないかもしれない

// 通常の代入
const foo = 'dummy';
const bar = 'key';
const baz = 1024;

// 分割代入
const obj1 = {
  foo: 4,
  foo: 8,
  '<fuu>': 16,
  [bar]: 128,
  [`_${bar}2`]: 256,
  baz: baz / 2,
};

// 分割代入の結果
console.log(obj1); // { foo: 8, '<fuu>': 16, key: 128, _key2: 256, baz: 512 }

// 分割代入の簡略化
const obj2 = { baz };
console.log(obj2); // { baz: 1024 }

// // 配列の分割代入
// 追記：下記の例は分割代入の極端な例で、実際の開発ではあまり使わないかもしれない

// 通常の代入
const [a, b] = ['foo', 'bar'];
console.log(a, b); // foo bar

// 分割代入
const [, n] = [1, 4];
console.log(n); // 4

// 分割代入の結果
const [, , i, , j, , , k] = [1, 2, 3, 4, 5, 6, 7];
console.log(i, j, k); // 3 5 undefined

// 分割代入の簡略化
const profile = { name: 'Kanae', age: 24, gender: 'f' };
const { name, age } = profile;
console.log(name, age); // Kanae 24
