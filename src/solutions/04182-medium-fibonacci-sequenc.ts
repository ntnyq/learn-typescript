/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/04182-medium-fibonacci-sequenc/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'
import { CreateArray } from './_utils'

// Loop times
// type Add<Num1 extends number, Num2 extends number> = [
//   ...CreateArray<Num1>,
//   ...CreateArray<Num2>,
// ][`length`]

// type Subtract<Num1 extends number, Num2 extends number> = CreateArray<Num1> extends [
//   ...arr1: CreateArray<Num2>,
//   ...arr2: infer Result,
// ]
//   ? Result[`length`]
//   : never

// type Fibonacci<T extends number> = T extends 1 | 2
//   ? 1
//   : Add<Fibonacci<Subtract<T, 1>>, Fibonacci<Subtract<T, 2>>>

type Fibonacci<
  T extends number,
  R extends unknown[] = [],
  U1 extends unknown[] = [],
  U2 extends unknown[] = [1],
> = T extends R[`length`] ? U1[`length`] : Fibonacci<T, [1, ...R], U2, [...U1, ...U2]>

// 以数组长度相当作为循环终结条件
// 返回值为U1数组长度
// U2 为 新的两个数之和

export type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]
