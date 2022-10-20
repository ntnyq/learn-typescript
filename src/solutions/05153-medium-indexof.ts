/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/05153-medium-indexof/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

// type IndexOf<
//   T extends unknown[],
//   U,
//   Counter extends unknown[] = [],
// > = U extends T[Counter[`length`]]
//   ? Counter[`length`]
//   : T[`length`] extends Counter[`length`]
//   ? -1
//   : IndexOf<T, U, [unknown, ...Counter]>

type IndexOf<T extends unknown[], U, Counter extends any[] = []> = T extends [
  infer First,
  ...infer Rest,
]
  ? Equal<U, First> extends true
    ? Counter[`length`] extends 0
      ? -1
      : Counter[`length`]
    : IndexOf<Rest, U, [First, ...Counter]>
  : -1

export type cases = [
  Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
  Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
  Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
  Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>,
]
