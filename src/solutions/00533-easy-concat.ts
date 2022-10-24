/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

export type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]
