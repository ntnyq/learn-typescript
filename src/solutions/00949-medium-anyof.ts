/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00949-medium-anyof/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type IsTruthy<T> = T extends 0 | [] | `` | false ? false : keyof T extends never ? false : true

type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Rest]
  ? IsTruthy<First> extends true
    ? true
    : AnyOf<Rest>
  : false

export type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
]
