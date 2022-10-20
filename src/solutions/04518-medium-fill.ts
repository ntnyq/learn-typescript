/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/04518-medium-fill/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Result extends unknown[] = [],
  Replace = Result[`length`] extends Start ? (Result[`length`] extends End ? false : true) : false,
> = Replace extends true
  ? T extends [any, ...infer R]
    ? Fill<R, N, Start, End, [...Result, N], [...Result, N]['length'] extends End ? false : true>
    : Result
  : T extends [infer F, ...infer R]
  ? Fill<R, N, Start, End, [...Result, F]>
  : Result

export type cases = [
  Expect<Equal<Fill<[], 0>, []>>,
  Expect<Equal<Fill<[], 0, 0, 3>, []>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
  Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
  Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>,
]
