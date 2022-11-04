/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00090-hard-optional-keys/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

// 由 keyof 开始对对象获取key
// 整个对象 Required 后 能 extends 则为非可选
type OptionalKeys<T extends object> = keyof {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K]
}

export type cases = [
  Expect<Equal<OptionalKeys<{ a: number; b?: string }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined }>, 'b'>>,
  Expect<
    Equal<OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>, 'b' | 'c' | 'd'>
  >,
  Expect<Equal<OptionalKeys<{}>, never>>,
]
