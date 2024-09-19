/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00116-medium-replace/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

// type Replace<
//   S extends string,
//   From extends string,
//   To extends string,
// > = S extends `${infer Prefix}${From}${infer Suffix}`
//   ? S extends `${Prefix}${Suffix}` // From = ``
//     ? S
//     : `${Prefix}${To}${Suffix}`
//   : S

type Replace<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer Prefix}${From}${infer Suffix}`
    ? `${Prefix}${To}${Suffix}`
    : S

export type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]
