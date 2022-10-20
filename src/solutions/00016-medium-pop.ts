/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type Pop<T extends unknown[]> = T extends [...infer Rest, infer _] ? Rest : T

export type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
]
