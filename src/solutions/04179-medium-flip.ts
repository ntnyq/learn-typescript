/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/04179-medium-flip/README.md
 */

import type { Equal, Expect, NotEqual } from '@type-challenges/utils'

// type StringifyType = string | number | boolean | bigint | null | undefined
// type ToString<T extends StringifyType> = `${T}`
// type Flip<T extends Record<string | number, string | number | boolean>> = {
//   [Key in keyof T as ToString<T[Key]>]: Key
// }
type Flip<T extends { [key: number | string]: any }> = {
  [Key in keyof T as `${T[Key]}`]: Key
}

export type cases = [
  Expect<Equal<{ a: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<NotEqual<{ b: 'pi' }, Flip<{ pi: 'a' }>>>,
  Expect<Equal<{ 3.14: 'pi'; true: 'bool' }, Flip<{ pi: 3.14; bool: true }>>>,
  Expect<Equal<{ val2: 'prop2'; val: 'prop' }, Flip<{ prop: 'val'; prop2: 'val2' }>>>,
]
