/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/04803-medium-trim-right/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type Space = ` ` | `\t` | `\n`
type TrimRight<S extends string> = S extends `${infer Rest}${Space}` ? TrimRight<Rest> : S

export type cases = [
  Expect<Equal<TrimRight<'str'>, 'str'>>,
  Expect<Equal<TrimRight<'str '>, 'str'>>,
  Expect<Equal<TrimRight<'str     '>, 'str'>>,
  Expect<Equal<TrimRight<'     str     '>, '     str'>>,
  Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
  Expect<Equal<TrimRight<''>, ''>>,
  Expect<Equal<TrimRight<'\n\t '>, ''>>,
]
