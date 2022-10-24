/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/02822-Hard-split/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

// type Split<
//   S extends string,
//   Sep extends string,
//   Group extends string = ``,
//   Result extends string[] = [],
// > = S extends `${infer F}${infer Rest}`
//   ? Sep extends ``
//     ? Split<Rest, Sep, ``, [...Result, F]>
//     : string extends S
//     ? S[]
//     : F extends Sep
//     ? Split<Rest, Sep, ``, [...Result, Group]>
//     : Split<Rest, Sep, `${Group}${F}`, Result>
//   : Sep extends ``
//   ? Result
//   : [...Result, Group]

type Split<
  S extends string,
  Sep extends string,
  Result extends string[] = [],
> = S extends `${infer F}${Sep}${infer O}`
  ? Split<O, Sep, [...Result, F]>
  : Sep extends ``
  ? Result
  : string extends S
  ? S[]
  : [...Result, S]

export type cases = [
  Expect<Equal<Split<'Hi! How are you?', 'z'>, ['Hi! How are you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ' '>, ['Hi!', 'How', 'are', 'you?']>>,
  Expect<
    Equal<
      Split<'Hi! How are you?', ''>,
      ['H', 'i', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']
    >
  >,
  Expect<Equal<Split<'', ''>, []>>,
  Expect<Equal<Split<'', 'z'>, ['']>>,
  Expect<Equal<Split<string, 'whatever'>, string[]>>,
]
