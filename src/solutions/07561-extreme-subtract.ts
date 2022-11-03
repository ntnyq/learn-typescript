/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/07561-extreme-subtract/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'
import { CreateArray } from './_utils'

type Subtract<M extends number, S extends number> = CreateArray<M> extends [
  ...arr1: CreateArray<S>,
  ...arr2: infer Rest,
]
  ? Rest[`length`]
  : never

export type cases = [
  Expect<Equal<Subtract<1, 1>, 0>>,
  Expect<Equal<Subtract<2, 1>, 1>>,
  Expect<Equal<Subtract<1, 2>, never>>,
]

export type errors = [
  // @ts-expect-error
  Expect<Equal<Subtract<1000, 999>, 1>>,
]
