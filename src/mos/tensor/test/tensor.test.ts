import test from "node:test";
import assert from "node:assert";
import { shape, rank, zeroTensor } from "../tensor.js";


test("mos -- shape", () =>{
    assert.deepEqual(shape(1), [])
    assert.deepEqual(shape([1, 2, 3]), [3])
    assert.deepEqual(shape([[1], [2], [3]]), [3, 1])
})

test("mos -- rank", () => {
    assert.deepEqual(rank(1), 0)
    assert.deepEqual(rank([1]), 1)
    assert.deepEqual(rank([[1], [2], [3]]), 2)
})

test("mos -- zeroTensor", () => {
    assert.deepEqual(zeroTensor([]), 0)
    assert.deepEqual(zeroTensor([3]), [0, 0, 0])
    assert.deepEqual(zeroTensor([2, 3]), [[0, 0, 0], [0, 0, 0]])
    assert.deepEqual(zeroTensor([1, 2, 3]), [[[0, 0, 0],[0, 0, 0]]])
})