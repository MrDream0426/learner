import test from "node:test";
import assert from "node:assert";
import { add, sub, sum, sum1 } from "../operator.js";

test("mos -- sum1", () => {
    assert.equal(sum1([1, 2, 3, 4, 5, 6]), 21)
})

test ("mos -- sum", () => {
    assert.deepEqual(sum(1), 1)
    assert.deepEqual(sum([1, 2, 3]), 6)
    assert.deepEqual(sum([[1, 2, 3], [4, 5, 6]]), [6, 15])
})

test ("mos -- sub", () =>{
    assert.deepEqual(sub(1, 1), 0)
    assert.deepEqual(sub([1, 2, 3], [4, 5, 6]), [-3, -3, -3])
    assert.deepEqual(sub([[1], [2], [3]], [[4], [5], [6]]), [[-3], [-3], [-3]])
})

test ("mos -- add", () => {
    assert.deepEqual(add(1, 1), 2)
    assert.deepEqual(add([1, 2, 3], [4, 5, 6]), [5, 7, 9])
    assert.deepEqual(add([[1], [2], [3]], [[4], [5], [6]]), [[5], [7], [9]])
})