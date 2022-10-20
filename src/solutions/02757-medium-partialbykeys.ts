/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/02757-medium-partialbykeys/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

interface User {
  name: string
  age: number
  address: string
}

interface UserPartialName {
  name?: string
  age: number
  address: string
}

interface UserPartialNameAndAge {
  name?: string
  age?: number
  address: string
}

type Merge<Obj> = {
  [K in keyof Obj]: Obj[K]
}

type PartialByKeys<T, K extends keyof T = keyof T> = Merge<
  Omit<T, K> & {
    [Key in keyof T as Key extends K ? Key : never]?: T[Key]
  }
>

export type cases = [
  Expect<Equal<PartialByKeys<User, 'name'>, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, 'name' | 'age'>, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
]

export type errors = [
  // @ts-expect-error
  Expect<Equal<PartialByKeys<User, 'name' | 'unknown'>, UserPartialName>>,
]
