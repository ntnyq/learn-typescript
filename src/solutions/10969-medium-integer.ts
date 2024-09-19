/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/10969-medium-integer/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

// type HasDot<T extends number | string> = `${T}` extends `${string}.${string}` ? true : false
// type Integer<T> = T extends number
//   ? number extends T
//     ? never
//     : HasDot<T> extends true
//     ? never
//     : T
//   : never

type Integer<T extends number> = `${T}` extends `${string}.${string}`
  ? never
  : T extends number
    ? number extends T
      ? never
      : T
    : never

const x = 1
const y = 1 as const

export type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<Integer<1.1>, never>>,
  Expect<Equal<Integer<1>, 1>>,
  // @ts-expect-error
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>,
]
