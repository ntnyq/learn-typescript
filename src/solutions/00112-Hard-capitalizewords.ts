/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00112-Hard-capitalizewords/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type Seperator =
  | `.`
  | `,`
  | ` `
  | `!`
  | `@`
  | `#`
  | `$`
  | `%`
  | `^`
  | `&`
  | `*`
  | `(`
  | `)`
  | `_`
  | `+`
  | `{`
  | `}`
  | `|`
  | `🤣` // TODO

type CapitalizeWordFn<S extends string> = S extends `${infer F}${infer Rest}`
  ? F extends Seperator
    ? `${F}${CapitalizeWordFn<Capitalize<Rest>>}`
    : `${F}${CapitalizeWordFn<Rest>}`
  : S

type CapitalizeWords<S extends string> = CapitalizeWordFn<Capitalize<S>>

export type cases = [
  Expect<Equal<CapitalizeWords<'foobar'>, 'Foobar'>>,
  Expect<Equal<CapitalizeWords<'FOOBAR'>, 'FOOBAR'>>,
  Expect<Equal<CapitalizeWords<'foo bar'>, 'Foo Bar'>>,
  Expect<Equal<CapitalizeWords<'foo bar hello world'>, 'Foo Bar Hello World'>>,
  Expect<Equal<CapitalizeWords<'foo bar.hello,world'>, 'Foo Bar.Hello,World'>>,
  Expect<
    Equal<
      CapitalizeWords<'aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp'>,
      'Aa!Bb@Cc#Dd$Ee%Ff^Gg&Hh*Ii(Jj)Kk_Ll+Mm{Nn}Oo|Pp'
    >
  >,
  Expect<Equal<CapitalizeWords<''>, ''>>,
]
