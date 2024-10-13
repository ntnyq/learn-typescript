/**
 * @file 特殊特性需记清
 */

/**
 * 特性 1: any 类型与任何类型交叉都是 any。 1 & any 结果是any。
 */
export type IsAny<T> = `ntnyq` extends `foobar` & T ? true : false
export type IsAnyResult = IsAny<any>

export type IsEqual<A, B> = (A extends B ? true : false) & (B extends A ? true : false)
export type IsEqualResult = IsEqual<1, any>
export type IsEqualStrict<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false
export type IsEqualStrictResult = IsEqualStrict<2, any>

export type IsUnion<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : never

// 特性 2: 若条件类型左边为类型参数 且为never，那么右边和直接返回 never
export type IsNever<T> = T extends number ? 1 : 2
export type IsNeverStrict<T> = [T] extends [number] ? true : false

// 特性 3: 元组 的 length 为字符串 数据 number
export type NotEqual<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? false : true
export type IsUnion2<T> = T extends readonly [...prams: infer Elements]
  ? NotEqual<Elements[`length`], number>
  : false

export type IsUnion2Result = IsUnion2<`2`>

// 类型之间存在父子关系，更加具体的类型是子类型。
// 如果允许父类型赋值给子类型，叫做逆变。
// 如果允许子类型赋值给父类型，叫做斜变。
// TS 中函数参数有逆变的性质，也就是如果函数参数可能是多个类型，参数类型会变成它们的交叉类型。

// 联合类型转交叉类型
export type UnionToIntersection<U> = (U extends U ? (x: U) => unknown : never) extends (
  x: infer R,
) => unknown
  ? R
  : never
export type UnionToIntersectionResult = UnionToIntersection<{ name: `ntnyq` } | { age: 30 }>

// 索引的类型 可选索引的值为 undefined 和值类型的联合类型
// 过滤索引类型 可选类型索引若没有 pick 结果是 {}
export type MyPick<T, K extends keyof T> = { [P in K]: T[P] }
export type GetOptional<Obj extends Record<string, any>> = {
  [Key in keyof Obj as {} extends MyPick<Obj, Key> ? Key : never]: Obj[Key]
}
export type GetOptionalResult = GetOptional<{
  name: `ntnyq`
  age?: 30
  gender: `male` | undefined
}>

export type IsRequired<Key extends keyof Obj, Obj> = {} extends Pick<Obj, Key> ? never : Key
export type GetRequired<Obj extends Record<string, any>> = {
  [Key in keyof Obj as IsRequired<Key, Obj>]: Obj[Key]
}
export type GetRequiredResult = GetRequired<{
  name: `ntnyq`
  age?: 30
  gender: `male` | undefined
}>

// 可索引签名
// 特性 5: 索引签名不能构造成字面量类型，因为没有名字，而其他索引可以
export type RemoveIndexSignature<Obj extends Record<string, any>> = {
  [Key in keyof Obj as Key extends `${infer Str}` ? Str : never]: Obj[Key]
}
export type RemoveIndexSignatureResult = RemoveIndexSignature<{
  proxy?: string
  [key: string]: any
}>

// 过滤 class 的 public 属性
export class Person {
  public name: string
  protected age: number
  private gender: string

  constructor() {
    this.name = `ntnyq`
    this.age = 30
    this.gender = `male`
  }
}
export type ClassPublicProps<Obj extends Record<string, any>> = {
  [Key in keyof Obj]: Obj[Key]
}
export type ClassPublicPropsResult = ClassPublicProps<Person>

// as const
// ts 默认推导类型并不是字面量类型 但是加上 as const 后推导出的类型是 readonly 的

// 若类型参数是 any，会直接返回 trueType 和 falseType 的合并
export type TestAny<T> = T extends number ? 1 : 2
export type TestAnyResult = TestAny<any>
