/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type MyExclude<T, U> = T extends U ? never : T

type MyOmit<T, K extends keyof T> = {
  [Key in MyExclude<keyof T, K>]: T[Key]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}

export type test = MyOmit<Todo, 'description'>

export type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
export type error = MyOmit<Todo, 'description' | 'invalid'>
