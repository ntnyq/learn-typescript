/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00191-medium-append-argument/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type AppendArgument<Fn extends Function, A> = Fn extends (...args: infer Args) => infer Return
  ? (...args: [...Args, A]) => Return
  : never

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

export type cases = [Expect<Equal<Case1, Result1>>, Expect<Equal<Case2, Result2>>]

export type errors = [
  // @ts-expect-error
  AppendArgument<unknown, undefined>,
]
