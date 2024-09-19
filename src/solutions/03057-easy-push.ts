/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type Push<T extends any[], U> = [...T, U]

export type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>,
]
