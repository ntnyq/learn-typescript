/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/09896-medium-huo-qu-shu-zu-de-zhong-jian-yuan-su/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type GetMiddleElement<T extends unknown[]> = T extends [infer _, ...infer R, infer __]
  ? R extends []
    ? T
    : GetMiddleElement<R>
  : T

export type cases = [
  Expect<Equal<GetMiddleElement<[]>, []>>,
  Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5]>, [3]>>,
  Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5, 6]>, [3, 4]>>,
  Expect<Equal<GetMiddleElement<[() => string]>, [() => string]>>,
  Expect<Equal<GetMiddleElement<[() => number, '3', [3, 4], 5]>, ['3', [3, 4]]>>,
  Expect<Equal<GetMiddleElement<[() => string, () => number]>, [() => string, () => number]>>,
  Expect<Equal<GetMiddleElement<[never]>, [never]>>,
]

export type errors = [
  // @ts-expect-error
  GetMiddleElement<1, 2, 3>,
]
