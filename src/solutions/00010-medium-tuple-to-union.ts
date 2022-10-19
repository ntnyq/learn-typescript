/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.md
 */
import type { Equal, Expect } from '@type-challenges/utils'

type TupleToUnion<T extends readonly any[]> = T[number]

export type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]
