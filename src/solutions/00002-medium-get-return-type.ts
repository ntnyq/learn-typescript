/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer ReturnType
  ? ReturnType
  : never

type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}

const fn = (v: boolean) => (v ? 1 : 2)
const fn1 = (v: boolean, w: any) => (v ? 1 : 2)

export type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>,
]
