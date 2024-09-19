/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00014-easy-first/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type First<T extends any[]> = T extends [infer First, ...unknown[]] ? First : never

export type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

export type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]
