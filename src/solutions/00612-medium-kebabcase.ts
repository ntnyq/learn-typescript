/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/00612-medium-kebabcase/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

// type UpChar =
//   | `A`
//   | `B`
//   | `C`
//   | `D`
//   | `E`
//   | `F`
//   | `G`
//   | `H`
//   | `I`
//   | `J`
//   | `K`
//   | `L`
//   | `M`
//   | `N`
//   | `O`
//   | `P`
//   | `Q`
//   | `R`
//   | `S`
//   | `T`
//   | `U`
//   | `V`
//   | `W`
//   | `X`
//   | `Y`
//   | `Z`

// type KebabCase<
//   S extends string,
//   isFirst extends boolean = true,
// > = S extends `${infer First}${infer Rest}`
//   ? First extends UpChar
//     ? isFirst extends true
//       ? `${Lowercase<First>}${KebabCase<Rest, false>}`
//       : `-${Lowercase<First>}${KebabCase<Rest, false>}`
//     : `${First}${KebabCase<Rest, false>}`
//   : S

type KebabCase<S extends string> = S extends `${infer First}${infer Rest}`
  ? Rest extends Uncapitalize<Rest>
    ? `${Uncapitalize<First>}${KebabCase<Rest>}`
    : `${Uncapitalize<First>}-${KebabCase<Uncapitalize<Rest>>}`
  : S

export type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]
