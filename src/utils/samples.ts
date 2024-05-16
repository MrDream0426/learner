import { randomNat } from "./randomNat.js"

export function samples(n: number, s: number): Array<number> {
  const results: Array<number> = []
  while (s > 0) {
    results.push(randomNat(n))
    s--
  }

  return results
}
