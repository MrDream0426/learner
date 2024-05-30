import { shape } from "./chater-2.js";
import assert from "assert";
import test from "node:test";

test("1mos chater-2 -- shape", () => {
    assert.deepEqual(shape(1), [])
    assert.deepEqual(shape([[1, 1], [2, 1]]), [2, 2])
})