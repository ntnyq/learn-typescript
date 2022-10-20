/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

// type PromiseReturn<T extends unknown[]> = {
//   [Key in keyof T]: Awaited<T[Key]>
// }
// declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): PromiseReturn<T>

type AwaitedResult<T extends unknown[]> = {
  [Key in keyof T]: Awaited<T[Key]>
}

declare function PromiseAll<T extends unknown[]>(arr: readonly [...T]): Promise<AwaitedResult<T>>

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

export type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
]
