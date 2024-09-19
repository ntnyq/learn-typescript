/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/04425-medium-greater-than/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

// 通过数组长度判断
type GreaterThan<T extends number, U extends number, Counter extends unknown[] = []> = T extends U
  ? false
  : Counter[`length`] extends U
    ? true
    : Counter[`length`] extends T
      ? false
      : GreaterThan<T, U, [...Counter, unknown]>

export type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
]
