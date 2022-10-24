/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/04499-medium-chunk/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

// type Chunk<
//   T extends unknown[],
//   K extends number,
//   Temp extends unknown[] = [],
//   Result extends unknown[] = [],
// > = T extends []
//   ? Temp extends []
//     ? Result
//     : [...Result, Temp]
//   : T extends [infer First, ...infer Rest]
//   ? Temp[`length`] extends K
//     ? Chunk<Rest, K, [First], [...Result, Temp]>
//     : Chunk<Rest, K, [...Temp, First], Result>
//   : []
type Chunk<T extends unknown[], N extends number, Result extends unknown[] = []> = T extends [
  infer First,
  ...infer Rest,
]
  ? Result[`length`] extends N
    ? [Result, ...Chunk<T, N>]
    : Chunk<Rest, N, [...Result, First]>
  : Result extends []
  ? Result
  : [Result]

export type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
]
