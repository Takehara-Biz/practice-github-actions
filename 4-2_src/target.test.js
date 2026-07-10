const test = require('node:test');
const assert = require('node:assert/strict');
const { add } = require('./target');

test('2つの数値を足し合わせる', () => {
    // add(1, 2) の結果が 3 であることを検証
    assert.strictEqual(add(1, 2), 3);
});

test('マイナスの数値を足し合わせる', () => {
    // add(-1, 1) の結果が 0 であることを検証
    assert.strictEqual(add(-1, 1), 0);
});