/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/02688-medium-startswith/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type StartsWith<T extends string, U extends string> = T extends `${U}${string}` ? true : false
// type StartsWith<T extends string, U extends string> = T extends `${U}${infer _}` ? true : false

export type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abc'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
  Expect<Equal<StartsWith<'abc', ''>, true>>,
  Expect<Equal<StartsWith<'abc', ' '>, false>>,
  Expect<Equal<StartsWith<'', ''>, true>>,
]
