/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/04037-hard-ispalindrome/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type Split<S extends string | number> = `${S}` extends `${infer C}${infer R}`
  ? [C, ...Split<R>]
  : []

type CheckPalindrome<T extends unknown[]> = T extends [infer F, ...infer R, infer L]
  ? Equal<F, L> extends true
    ? R extends []
      ? true
      : CheckPalindrome<R>
    : false
  : true

type IsPalindrome<T extends number | string> = CheckPalindrome<Split<T>>

export type cases = [
  Expect<Equal<IsPalindrome<'abc'>, false>>,
  Expect<Equal<IsPalindrome<'b'>, true>>,
  // cSpell: disable-next-line
  Expect<Equal<IsPalindrome<'abca'>, false>>,
  Expect<Equal<IsPalindrome<'abcba'>, true>>,
  Expect<Equal<IsPalindrome<121>, true>>,
  Expect<Equal<IsPalindrome<19260817>, false>>,
]
