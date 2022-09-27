/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.md
 */

import type { Expect, Equal } from '@type-challenges/utils'

type Unshift<T extends any[], U> = [U, ...T]

export type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]
