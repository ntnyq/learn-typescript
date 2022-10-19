/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00106-medium-trim-left/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type Space = ` ` | `\t` | `\n`
type TrimLeft<S extends string> = S extends `${Space}${infer Rest}` ? TrimLeft<Rest> : S

export type cases = [
  Expect<Equal<TrimLeft<'str'>, 'str'>>,
  Expect<Equal<TrimLeft<' str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str'>, 'str'>>,
  Expect<Equal<TrimLeft<'     str     '>, 'str     '>>,
  Expect<Equal<TrimLeft<'   \n\t foo bar '>, 'foo bar '>>,
  Expect<Equal<TrimLeft<''>, ''>>,
  Expect<Equal<TrimLeft<' \n\t'>, ''>>,
]
