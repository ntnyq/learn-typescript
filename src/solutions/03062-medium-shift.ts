/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/03062-medium-shift/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type Shift<T extends unknown[]> = T extends [infer _, ...infer Rest] ? Rest : []

export type cases = [
  Expect<Equal<Shift<[]>, []>>,
  Expect<Equal<Shift<[1]>, []>>,
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,
]

export type errors = [
  // @ts-expect-error
  Shift<unknown>,
]
