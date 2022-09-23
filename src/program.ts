/**
 * @file 类型运算
 */

// TS 新增类型
// interface tuple enum 3 种复合类型
// void never any unknown 4 种特殊类型
// 字面量类型

// 条件 extends ?:

// 通过类型参数 高级类型指通过类型运算 获取到的新类型

export type res = 1 extends 2 ? true : false

export type IsTwo<T> = T extends 2 ? true : false

export type res1 = IsTwo<1>
export type res2 = IsTwo<2>

// 推导 infer
// 用于提取类型的一部分
export type First<Tuple extends unknown[]> = Tuple extends [infer T, ...unknown[]]
  ? T : never // 前面的 extends 是约束

export type FirstElement<Tuple extends unknown[]> = Tuple[0]

export type res3 = First<[2, `age`, false]>

export type res4 = FirstElement<[2, `age`, false]>

// 联合 类似 || 几个类型之一
export type Direction = `east` | `west` | `south` | `north`

// 交叉 类似 && 类型做合并 仅保留相同类型可以合并 不同的类型会被舍弃
export type ObjType = { name: string } & { age: number }

export const obj: ObjType = {
  name: `hello`,
  age: 23,
}

export type UnMergable = 233 & true

// 映射
// keyof T 查询所有类型中的所有索引 叫做 索引查询
// T[Key] 查询索引类型中某个索引值 叫做 索引访问
// in 用于遍历联合类型的运算符
export type MapType<T> = {
  [Key in keyof T]?: T[Key]
}

export type ThreeElement<T> = {
  [Key in keyof T]: [T[Key], T[Key], T[Key]]
}

export type MutateKeyThreeElement<T> = {
  [Key in keyof T as `${Key & string}${Key & string}${Key & string}`]: [T[Key], T[Key], T[Key]]
}

export type three = ThreeElement<{ a: 1; b: 2 }>

export type mutateKeyThree = MutateKeyThreeElement<{ a: 1; b: 2 }>
