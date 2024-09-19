/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}

type MyPick<O, V extends keyof O> = {
  [Key in V]: O[Key]
}

export type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
]

export type errors = [
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]
