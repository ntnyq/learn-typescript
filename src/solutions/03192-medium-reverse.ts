/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/03192-medium-reverse/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type Reverse<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? [...Reverse<Rest>, First]
  : T

export type cases = [
  Expect<Equal<Reverse<[]>, []>>,
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>,
]
