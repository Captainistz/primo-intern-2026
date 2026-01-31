export function merge(
  c1: number[],
  c2: number[],
  c3: number[], // Reverse sorted
): number[] {
  const merged: number[] = []

  let ptr1 = 0
  let ptr2 = 0
  let ptr3: number = c3.length - 1

  while (ptr1 < c1.length || ptr2 < c2.length || ptr3 >= 0) {
    const v1: number = ptr1 < c1.length ? (c1[ptr1] ?? Infinity) : Infinity
    const v2: number = ptr2 < c2.length ? (c2[ptr2] ?? Infinity) : Infinity
    const v3: number = ptr3 >= 0 ? (c3[ptr3] ?? Infinity) : Infinity

    if (v1 <= v2 && v1 <= v3) {
      merged.push(v1)
      ptr1++
    } else if (v2 <= v1 && v2 <= v3) {
      merged.push(v2)
      ptr2++
    } else {
      merged.push(v3)
      ptr3--
    }
  }

  return merged
}
