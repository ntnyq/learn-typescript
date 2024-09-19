/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/05317-medium-lastindexof/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

// type GetLastIndex<T extends unknown[], U, Counter extends unknown[] = []> = T extends [
//   ...infer Rest,
//   infer Last,
// ]
//   ? U extends Last
//     ? [...Counter, unknown][`length`]
//     : GetLastIndex<Rest, U, [...Counter, unknown]>
//   : -1

// export type Subtract<Num1 extends number, Num2 extends number> = CreateArray<Num1> extends [
//   ...arr1: CreateArray<Num2>,
//   ...arr2: infer Rest,
// ]
//   ? Rest[`length`]
//   : never

// type LastIndexOf<T extends unknown[], U> = GetLastIndex<T, U> extends -1
//   ? -1
//   : Subtract<T[`length`], GetLastIndex<T, U>>
type LastIndexOf<T extends unknown[], U> = T extends [...infer R, infer L]
  ? Equal<U, L> extends true // 判断 any 使用 Equal
    ? R[`length`]
    : LastIndexOf<R, U>
  : -1

export type cases = [
  Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
  Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
  Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
  Expect<Equal<LastIndexOf<[string, 2, number, 'a', number, 1], number>, 4>>,
  Expect<Equal<LastIndexOf<[string, any, 1, number, 'a', any, 1], any>, 5>>,
]
