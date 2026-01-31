import { merge } from './merge.js'

describe('merge', () => {
  it('[00000] - should sort three arrays', () => {
    const c1: number[] = [1, 3, 5, 7, 9] // min(0) -> max
    const c2: number[] = [0, 2, 4, 6, 8] // min(0) -> max
    const c3: number[] = [10, 9, 8, 7, 6] // max -> min(0)

    const result: number[] = merge(c1, c2, c3)

    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10])
  })

  it('[00001] - should handle empty arrays', () => {
    const c1: number[] = [] // min(0) -> max
    const c2: number[] = [0, 2, 4, 6, 8] // min(0) -> max
    const c3: number[] = [] // max -> min(0)

    const result: number[] = merge(c1, c2, c3)

    expect(result).toEqual([0, 2, 4, 6, 8])
  })

  it('[00002] - should handle all empty arrays', () => {
    const c1: number[] = [] // min(0) -> max
    const c2: number[] = [] // min(0) -> max
    const c3: number[] = [] // max -> min(0)

    const result: number[] = merge(c1, c2, c3)

    expect(result).toEqual([])
  })
})
