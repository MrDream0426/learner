import assert from "node:assert";
import { assertTensor1, isScalar, isTensor1, rank, type Tensor} from "./tensor.js";
import { assertNotScalar } from "../../the-book/chapter-2.js";

function extend2(t1:Tensor, t2: Tensor, extendedFunction: Function): Tensor {
    if (isScalar(t1)) {
        assert.equal(rank(t1), rank(t2))
        return extendedFunction(t1, t2)}
    else {
        assertNotScalar(t2)
        return t1.map((t1, index) => {
            return extend2(t1, t2[index], extendedFunction)})
    }
}

export function sum1(t: Tensor): number {
    assertTensor1(t)
    return summed(t, t.length-1, 0)
    function summed(t: Array<number>, i: number, a: number): number {
        if (i === 0) {return a + t[0]}
        else {return summed(t, i-1, a + t[i])}
    }
}

export function sum(t: Tensor): Tensor {
    return summed(t)
    function summed(t: Tensor): Tensor {
        if (isScalar(t)) {return t}
        if (isTensor1(t)) {return sum1(t)}
        else {return t.map(summed)}
    }
}

function add0(n1: number, n2:number): number {
    return n1 + n2
}

export function add(t1: Tensor, t2: Tensor): Tensor {
    return extend2(t1, t2, add0)
}

function sub0(n1: number, n2: number): number {
    return n1 - n2
} 

// t1 - t2 = result
export function sub(t1: Tensor, t2: Tensor): Tensor {
    return extend2(t1, t2, sub0)
}
