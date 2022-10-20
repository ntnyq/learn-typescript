/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/05117-medium-without/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type ToTuple<T> = T extends unknown[] ? T[number] : T
type Without<T extends unknown[], U> = T extends [infer First, ...infer Rest]
  ? First extends ToTuple<U>
    ? Without<Rest, U> // remove U
    : [First, ...Without<Rest, U>]
  : T

export type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
]
