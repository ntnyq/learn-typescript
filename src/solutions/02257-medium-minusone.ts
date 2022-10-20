/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/02257-medium-minusone/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'
import { CreateArray } from './_utils'

// type MinusOne<T extends number> = CreateArray<T> extends [...infer Rest, infer _]
//   ? Rest[`length`]
//   : never

// https://github.com/microsoft/TypeScript/issues/49459
type MinusOne<T extends number, Arr extends unknown[] = []> = 0 extends 1
  ? never
  : [unknown, ...Arr][`length`] extends T
  ? Arr[`length`]
  : MinusOne<T, [unknown, ...Arr]>

export type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
]
