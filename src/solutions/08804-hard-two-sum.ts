/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/08804-hard-two-sum/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'
import type { CreateArray } from './_utils'

type Subtract<Num1 extends number, Num2 extends number> = CreateArray<Num1> extends [
  ...arr1: CreateArray<Num2>,
  ...arr2: infer Rest,
]
  ? Rest[`length`]
  : never

type IsInclude<Arr extends unknown[], Ele> = Arr extends [infer F, ...infer R]
  ? Equal<Ele, F> extends true
    ? true
    : IsInclude<R, Ele>
  : false

type TwoSum<T extends number[], U extends number> = T extends [infer F extends number, ...infer R]
  ? IsInclude<R, Subtract<U, F>> extends true
    ? true
    : R extends number[]
    ? TwoSum<R, U>
    : false
  : false

export type cases = [
  Expect<Equal<TwoSum<[3, 3], 6>, true>>,
  Expect<Equal<TwoSum<[3, 2, 4], 6>, true>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 15>, false>>,
  Expect<Equal<TwoSum<[2, 7, 11, 15], 9>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 0>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 1>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 2>, false>>,
  Expect<Equal<TwoSum<[1, 2, 3], 3>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 4>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 5>, true>>,
  Expect<Equal<TwoSum<[1, 2, 3], 6>, false>>,
]
