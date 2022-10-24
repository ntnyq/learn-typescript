/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00018-easy-tuple-length/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type Length<T extends readonly unknown[]> = T[`length`]

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

export type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
]

export type errors = [
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>,
]
