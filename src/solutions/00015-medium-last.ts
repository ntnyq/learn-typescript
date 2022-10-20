/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00015-medium-last/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type Last<T extends any[]> = T extends [...infer _, infer Last] ? Last : never

export type cases = [
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]
