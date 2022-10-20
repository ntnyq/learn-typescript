/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/05310-medium-join/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type Join<T extends unknown[], U extends number | string> = T extends [infer First, ...infer Rest]
  ? First extends string
    ? Rest extends [] // Rest is empty array
      ? First
      : `${First}${U}${Join<Rest, U>}`
    : ``
  : ``

export type cases = [
  Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
  Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
  Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
  Expect<Equal<Join<['o'], 'u'>, 'o'>>,
]
