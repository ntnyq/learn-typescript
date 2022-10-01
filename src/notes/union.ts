/**
 * @file 联合分散可简化
 */

/**
 * 分布式条件类型
 * 原因: 联合类型每个元素互不关联
 * 类型参数为联合类型，且左边直接引用该类型参数时，会把每个元素单独传入做类型计算，再合并成联合类型
 */

export type Union = `a` | `b` | `c`
export type UppercaseA<Item extends string> = Item extends `a` ? Uppercase<Item> : Item

export type UppercaseAResult = UppercaseA<Union>
export type UnionString = `${Union}~~~~`

export type Camelcase<Str extends string> = Str extends `${infer Left}_${infer Right}${infer Rest}`
  ? `${Left}${Uppercase<Right>}${Camelcase<Rest>}`
  : Str

export type CamelcaseResult = Camelcase<`hello_word_ntnyq`>

export type CamelcaseArr<Arr extends unknown[]> = Arr extends [infer Item, ...infer Rest]
  ? [Camelcase<Item & string>, ...CamelcaseArr<Rest>]
  : []

export type CamelcaseArrResult = CamelcaseArr<[`aa_aa_aa`, `bb_bb_bb`, `cc_cc_dd`]>

export type CamelcaseUnion<Item extends string> =
  Item extends `${infer Left}_${infer Right}${infer Rest}`
    ? `${Left}${Uppercase<Right>}${Camelcase<Rest>}`
    : Item

export type CamelcaseUnionResult = CamelcaseUnion<`aa_aa_aa` | `bb_bb_bb` | `cc_cc_cc`>

// A extends A 触发分布式条件类型 条件类型左边是联合类型才会触发分布式条件类型处理
export type IsUnion<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : never

export type IsUnionResult = IsUnion<`a` | `b` | `c`>
export type IsUnionResult2 = IsUnion<[`a` | `b` | `c`]>

export type BEM<
  Block extends string,
  Elements extends string[],
  Modifiers extends string[],
> = `${Block}_${Elements[number]}--${Modifiers[number]}`

export type BEMResult = BEM<`el`, [`input`, `select`], [`small`, `large`]>

// 数组转为联合类型
export type Arr = [`a`, `b`, `c`]
export type ArrUnion = Arr[number]

export type Combination<A extends string, B extends string> = A | B | `${A}${B}` | `${B}${A}`

export type CombinationResult = Combination<`Hello`, `World`>

export type AllCombinations<A extends string, B extends string = A> = A extends A
  ? Combination<A, AllCombinations<Exclude<B, A>>>
  : never

export type AllCombinationsResult = AllCombinations<`A` | `B` | `C`>
