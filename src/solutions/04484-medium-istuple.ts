/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/04484-medium-istuple/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type IsTuple<T> = [T] extends [never]
  ? false
  : T extends readonly any[] // 防止 `{ length: 1 }`
  ? number extends T[`length`] // 是否为数组
    ? false
    : true
  : false

// 元祖特性
// 1. 长度有限，所以与数组比 [`length`]返回值不同 元祖返回数组 数组返回number

export type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>,
]
