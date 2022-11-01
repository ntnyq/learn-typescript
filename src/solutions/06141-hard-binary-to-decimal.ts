/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/06141-hard-binary-to-decimal/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'
// import type { CreateArray } from './_utils'

// Basic
// type Split<S extends string, Result extends unknown[] = []> = S extends `${infer C}${infer R}`
//   ? Split<R, [...Result, C]>
//   : Result
// type GetArray<T extends unknown[], Result extends unknown[] = [unknown]> = T extends [
//   infer _,
//   ...infer R,
// ]
//   ? GetArray<R, [...Result, ...Result]>
//   : Result
// type TransformToDecimal<T extends unknown[], Result extends unknown[] = []> = T extends [
//   infer F,
//   ...infer R,
// ]
//   ? F extends '1'
//     ? TransformToDecimal<R, [...Result, ...GetArray<CreateArray<R[`length`]>>]>
//     : TransformToDecimal<R, Result>
//   : Result[`length`]

// type BinaryToDecimal<S extends string> = TransformToDecimal<Split<S>>

// Advanced
type BinaryToDecimal<
  S extends string,
  Result extends unknown[] = [],
> = S extends `${infer C}${infer R}`
  ? C extends '1'
    ? BinaryToDecimal<R, [...Result, ...Result, any]>
    : BinaryToDecimal<R, [...Result, ...Result]>
  : Result[`length`]

export type cases = [
  Expect<Equal<BinaryToDecimal<'10'>, 2>>,
  Expect<Equal<BinaryToDecimal<'0011'>, 3>>,
  Expect<Equal<BinaryToDecimal<'00000000'>, 0>>,
  Expect<Equal<BinaryToDecimal<'11111111'>, 255>>,
  Expect<Equal<BinaryToDecimal<'10101010'>, 170>>,
]
