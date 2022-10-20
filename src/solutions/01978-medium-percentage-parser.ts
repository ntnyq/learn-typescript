/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/01978-medium-percentage-parser/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

// type GetTokenSymbol<S extends string> = S extends `${infer First extends `+` | `-`}${infer _}`
//   ? First
//   : ``

// type GetTokenPercent<S extends string> = S extends `${infer _}%` ? `%` : ``

// type GetTokenNumber<
//   S extends string,
//   Result extends string = ``,
// > = S extends `${infer Char}${infer Rest}`
//   ? Char extends `${number}`
//     ? GetTokenNumber<Rest, `${Result}${Char}`>
//     : GetTokenNumber<Rest, Result>
//   : Result

// type PercentageParser<S extends string> = [GetTokenSymbol<S>, GetTokenNumber<S>, GetTokenPercent<S>]
type PercentageParser<T extends string> = T extends `${infer S extends `+` | `-`}${infer N}%`
  ? [S, N, `%`]
  : T extends `${infer S extends `+` | `-`}${infer N}`
  ? [S, N, ``]
  : T extends `${infer N}%`
  ? [``, N, `%`]
  : T extends `${infer N}`
  ? ['', N, '']
  : never

type Case0 = ['', '', '']
type Case1 = ['+', '', '']
type Case2 = ['+', '1', '']
type Case3 = ['+', '100', '']
type Case4 = ['+', '100', '%']
type Case5 = ['', '100', '%']
type Case6 = ['-', '100', '%']
type Case7 = ['-', '100', '']
type Case8 = ['-', '1', '']
type Case9 = ['', '', '%']
type Case10 = ['', '1', '']
type Case11 = ['', '100', '']

export type cases = [
  Expect<Equal<PercentageParser<''>, Case0>>,
  Expect<Equal<PercentageParser<'+'>, Case1>>,
  Expect<Equal<PercentageParser<'+1'>, Case2>>,
  Expect<Equal<PercentageParser<'+100'>, Case3>>,
  Expect<Equal<PercentageParser<'+100%'>, Case4>>,
  Expect<Equal<PercentageParser<'100%'>, Case5>>,
  Expect<Equal<PercentageParser<'-100%'>, Case6>>,
  Expect<Equal<PercentageParser<'-100'>, Case7>>,
  Expect<Equal<PercentageParser<'-1'>, Case8>>,
  Expect<Equal<PercentageParser<'%'>, Case9>>,
  Expect<Equal<PercentageParser<'1'>, Case10>>,
  Expect<Equal<PercentageParser<'100'>, Case11>>,
]
