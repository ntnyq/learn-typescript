/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/02693-medium-endswith/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type EndsWith<T extends string, U extends string> = T extends `${string}${U}` ? true : false

/* _____________ Test Cases _____________ */

export type cases = [
  Expect<Equal<EndsWith<'abc', 'bc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'abc'>, true>>,
  Expect<Equal<EndsWith<'abc', 'd'>, false>>,
]
