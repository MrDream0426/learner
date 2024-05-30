import { line } from "./chater-1.js";
import assert from "assert";
import test from "node:test";

test("1mos chater-1 -- line", () => {
    assert.equal(line(1)([2, 3]), 5)
})