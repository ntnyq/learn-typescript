/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/02070-medium-drop-char/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

// type DropChar<
//   S extends string,
//   C extends string,
//   Result extends string = ``,
//   R extends string = ``,
// > = S extends `${infer Prefix}${C}${infer Suffix}`
//   ? DropChar<Suffix, C, `${Result}${Prefix}`, Suffix>
//   : `${Result}${R}`

// type DropChar<
//   S extends string,
//   C extends string,
//   Result extends string = ``,
// > = S extends `${infer First}${infer Rest}`
//   ? First extends C
//     ? DropChar<Rest, C, Result>
//     : DropChar<Rest, C, `${Result}${First}`>
//   : Result

type DropChar<S extends string, C extends string> = S extends `${infer First}${C}${infer Rest}`
  ? DropChar<`${First}${Rest}`, C>
  : S

export type cases = [
  Expect<Equal<DropChar<'butter fly!', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<'butter fly!', '!'>, 'butter fly'>>,
  Expect<Equal<DropChar<'    butter fly!        ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', ' '>, 'butterfly!'>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 'b'>, '  u t t e r f l y ! '>>,
  Expect<Equal<DropChar<' b u t t e r f l y ! ', 't'>, ' b u   e r f l y ! '>>,
]

export type errors = [
  // @ts-expect-error
  Expect<Equal<DropChar<'butter fly!', ''>, 'butterfly!'>>,
]
