export type Tensor = number | Array<Tensor>

export function shape(t: Tensor): Array<number> {
    let result: Array<number> = []
    if (typeof(t) === "number"){
        return result
    }
    else {
        result.push(t.length)
        return result.concat(shape(t[0]))
    }
}