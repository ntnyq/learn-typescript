/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/03326-medium-bem-style-string/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type AppendString<B extends string, Sep extends string, Arr extends string[] = []> = Arr extends []
  ? B
  : `${B}${Sep}${Arr[number]}`
type BEM<B extends string, E extends string[], M extends string[]> = AppendString<
  AppendString<B, `__`, E>,
  `--`,
  M
>

export type cases = [
  Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
  Expect<
    Equal<
      BEM<'btn', ['price'], ['warning', 'success']>,
      'btn__price--warning' | 'btn__price--success'
    >
  >,
  Expect<
    Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large'>
  >,
]
