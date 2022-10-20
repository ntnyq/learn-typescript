/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/01042-medium-isnever/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

// https://github.com/microsoft/TypeScript/issues/31751
type IsNever<T> = [T] extends [never] ? true : false

// 条件类型若左边为类型参数且 never, 则返回never
type ExtendsNever<T> = T extends 1 ? 'yes' : 'no'
type foo = ExtendsNever<{}>
type Huh = ExtendsNever<never>

export type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
]
