/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/05360-medium-unique/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type Includes<T extends any[], U> = T extends [infer H, ...infer R]
  ? Equal<H, U> extends true
    ? true
    : Includes<R, U>
  : false

type Unique<T extends any[]> = T extends [...infer Rest, infer Last]
  ? Includes<Rest, Last> extends true
    ? Unique<Rest>
    : [...Unique<Rest>, Last]
  : T

export type cases = [
  Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
  Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
  Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
  Expect<
    Equal<
      Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>,
      [string, number, 1, 'a', 2, 'b']
    >
  >,
  Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>,
]
