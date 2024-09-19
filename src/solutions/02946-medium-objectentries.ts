/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/02946-medium-objectentries/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type ObjectEntries<T extends object, R = Required<T>, K = keyof R> = K extends keyof R
  ? [K, R[K] extends undefined ? undefined : R[K]]
  : never

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

export type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
]
