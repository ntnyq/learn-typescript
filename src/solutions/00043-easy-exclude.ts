/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type MyExclude<T, U> = T extends U ? never : T

export type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]
