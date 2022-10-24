/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/08767-medium-combination/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type Combination<T extends string[], All = T[number], Item = All> = Item extends string
  ? Item | `${Item} ${Combination<[], Exclude<All, Item>>}`
  : never

/* _____________ Test Cases _____________ */

export type cases = [
  Expect<
    Equal<
      Combination<['foo', 'bar', 'baz']>,
      | 'foo'
      | 'bar'
      | 'baz'
      | 'foo bar'
      | 'foo bar baz'
      | 'foo baz'
      | 'foo baz bar'
      | 'bar foo'
      | 'bar foo baz'
      | 'bar baz'
      | 'bar baz foo'
      | 'baz foo'
      | 'baz foo bar'
      | 'baz bar'
      | 'baz bar foo'
    >
  >,
]
