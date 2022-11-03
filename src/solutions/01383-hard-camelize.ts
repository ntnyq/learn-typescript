/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/01383-hard-camelize/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type CamelCase<S extends string> = S extends `${infer F}_${infer R}`
  ? `${F}${Capitalize<CamelCase<R>>}`
  : S
type CamelizeObject<T> = T extends object
  ? {
      [Key in keyof T as CamelCase<Key & string>]: Camelize<T[Key]>
    }
  : T
type CamelizeArray<T extends unknown[]> = T extends [infer F, ...infer R]
  ? [Camelize<F>, ...CamelizeArray<R>]
  : T
type Camelize<T> = T extends unknown[] ? CamelizeArray<T> : CamelizeObject<T>

export type cases = [
  Expect<
    Equal<
      Camelize<{
        some_prop: string
        prop: { another_prop: string }
        array: [
          { snake_case: string },
          { another_element: { yet_another_prop: string } },
          { yet_another_element: string },
        ]
      }>,
      {
        someProp: string
        prop: { anotherProp: string }
        array: [
          { snakeCase: string },
          { anotherElement: { yetAnotherProp: string } },
          { yetAnotherElement: string },
        ]
      }
    >
  >,
]
