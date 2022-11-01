/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/02059-hard-drop-string/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type StringToUnion<S extends string> = S extends `${infer C}${infer R}` ? C | StringToUnion<R> : S

type DropString<
  S extends string,
  R extends string,
  U = StringToUnion<R>,
> = S extends `${infer L}${infer Rest}` ? `${L extends U ? '' : L}${DropString<Rest, R, U>}` : S

export type cases = [
  Expect<Equal<DropString<'butter fly!', ''>, 'butter fly!'>>,
  Expect<Equal<DropString<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<'butter fly!', 'but'>, 'er fly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'but'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'but'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'tub'>, '     e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropString<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
]
