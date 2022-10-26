/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type If<C extends boolean, T, F> = C extends true ? T : F

export type cases = [Expect<Equal<If<true, 'a', 'b'>, 'a'>>, Expect<Equal<If<false, 'a', 2>, 2>>]

export type errors = [
  // @ts-expect-error
  If<null, 'a', 'b'>,
]
