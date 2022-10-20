/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/05140-medium-trunc/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type Trunc<T extends number | string> = `${T}` extends `${infer Prefix}.${infer _}`
  ? Prefix
  : `${T}`

export type cases = [
  Expect<Equal<Trunc<0.1>, '0'>>,
  Expect<Equal<Trunc<1.234>, '1'>>,
  Expect<Equal<Trunc<12.345>, '12'>>,
  Expect<Equal<Trunc<-5.1>, '-5'>>,
  Expect<Equal<Trunc<'1.234'>, '1'>>,
  Expect<Equal<Trunc<'-10.234'>, '-10'>>,
  Expect<Equal<Trunc<10>, '10'>>,
]
