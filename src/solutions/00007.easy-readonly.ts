/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00007-easy-readonly/README.md
 */

import type { Expect, Equal } from '@type-challenges/utils'

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type MyReadonly<T> = {
  readonly [Key in keyof T]: T[Key]
}

export type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>]
