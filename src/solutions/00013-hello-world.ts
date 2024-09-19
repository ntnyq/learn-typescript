/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00013-warm-hello-world/README.md
 */

import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type HelloWorld = string

export type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>]
