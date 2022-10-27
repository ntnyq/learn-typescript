/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00114-hard-camelcase/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type Seperator = `_` | `-`
type SplitToLowerCase<
  S extends string,
  R extends string = ``,
> = S extends `${infer F}${Seperator}${infer L}`
  ? SplitToLowerCase<Capitalize<Lowercase<L>>, `${R}${Capitalize<Lowercase<F>>}`>
  : `${R}${Capitalize<Lowercase<S>>}`
type CamelCase<S extends string> = S extends Seperator ? S : Uncapitalize<SplitToLowerCase<S>>

export type cases = [
  Expect<Equal<CamelCase<'foobar'>, 'foobar'>>,
  Expect<Equal<CamelCase<'FOOBAR'>, 'foobar'>>,
  Expect<Equal<CamelCase<'foo_bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase<'foo_bar_hello_world'>, 'fooBarHelloWorld'>>,
  Expect<Equal<CamelCase<'HELLO_WORLD_WITH_TYPES'>, 'helloWorldWithTypes'>>,
  Expect<Equal<CamelCase<'-'>, '-'>>,
  Expect<Equal<CamelCase<''>, ''>>,
  Expect<Equal<CamelCase<'😎'>, '😎'>>,
]
