// 分割代入の簡単な例

// // オブジェクトリテラル

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
