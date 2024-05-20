import type { Tensor } from "../tensor/index.js"
import { mul, sub } from "../toys/index.js"
import type { Representation } from "./Representation.js"

export function nakedRepresentation(options: {
  learningRate: number
}): Representation<Tensor> {
  return {
    inflate: (x) => x,
    deflate: (x) => x,
    update: (p, g) => sub(p, mul(options.learningRate, g)),
  }
}
