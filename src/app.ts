import { merge } from './helper/merge.js'

const c1: number[] = [1, 3, 5, 7, 9] // min(0) -> max
const c2: number[] = [0, 2, 4, 6, 8] // min(0) -> max
const c3: number[] = [10, 9, 8, 7, 6] // max -> min(0)

const result: number[] = merge(c1, c2, c3)
console.log(result)
