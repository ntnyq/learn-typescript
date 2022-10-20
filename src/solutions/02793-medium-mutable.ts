/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/02793-medium-mutable/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type Mutable<T extends object> = {
  -readonly [Key in keyof T]: T[Key]
}

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type List = [1, 2, 3]

export type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
  Expect<Equal<Mutable<Readonly<List>>, List>>,
]

export type errors = [
  // @ts-expect-error
  Mutable<'string'>,
  // @ts-expect-error
  Mutable<0>,
]
