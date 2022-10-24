/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00298-medium-length-of-string/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type LengthOfString<
  S extends string,
  Arr extends string[] = [],
> = S extends `${infer F}${infer Rest}` ? LengthOfString<Rest, [...Arr, F]> : Arr[`length`]

export type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]
