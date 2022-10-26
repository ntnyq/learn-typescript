/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00189-easy-awaited/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer Result>
  ? Result extends Promise<unknown>
    ? MyAwaited<Result>
    : Result
  : never

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>

export type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
]

export type errors = [
  // @ts-expect-error
  MyAwaited<number>,
]
