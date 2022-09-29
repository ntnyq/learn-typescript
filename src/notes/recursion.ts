/**
 * @file 递归复用做循环
 */

/**
 * TS 通过递归来实现循环调用
 *
 * 1. 数组元素个数不确定
 * 2. 字符串长度不确定
 * 3. 对象嵌套层级不确定
 *
 * @warning TS 类型递归层数有限制
 */

export type DeepPromise = Promise<Promise<Promise<Promise<Record<string, any>>>>>
export type GetPromiseType<P extends Promise<unknown>> = P extends Promise<infer ValueType>
  ? ValueType extends Promise<unknown>
    ? GetPromiseType<ValueType>
    : ValueType
  : never
export type GetPromiseTypeSimple<T> = T extends Promise<infer ValueType>
  ? GetPromiseTypeSimple<ValueType>
  : T
export type DeepPromiseValue = GetPromiseType<DeepPromise>
export type DeepPromiseSimpleValue = GetPromiseTypeSimple<DeepPromise>

// 数组
export type ReverseArray<T extends unknown[]> = T extends [infer First, ...infer Rest]
  ? [...ReverseArray<Rest>, First]
  : T

export type ReverseArrayResult = ReverseArray<[1, 2, 3, 4, 5, 6]>

export type IsEqual<A, B> = (A extends B ? true : false) & (B extends A ? true : false)

export type Includes<Arr extends unknown[], Item> = Arr extends [infer First, ...infer Rest]
  ? IsEqual<First, Item> extends true
    ? true
    : Includes<Rest, Item>
  : false

export type IncludesResult = Includes<[1, 2, 3, 4, 5], 3>

export type RemoveItem<Arr extends unknown[], Item, Result extends unknown[] = []> = Arr extends [
  infer First,
  ...infer Rest,
]
  ? IsEqual<First, Item> extends true
    ? RemoveItem<Rest, Item, Result>
    : RemoveItem<Rest, Item, [...Result, First]>
  : Result

export type RemoveItemResult = RemoveItem<[1, 2, 3, 4, 5], 3>

export type BuildArray<
  Length extends number,
  Ele = unknown,
  Arr extends unknown[] = [],
> = Arr['length'] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>
export type BuildArrayResult1 = BuildArray<6>
export type BuildArrayResult2 = BuildArray<6, 2>
export type BuildArrayResult3 = BuildArray<6, 2, [1, 3]>

// 字符串

export type StringToUnion<S extends string> = S extends `${infer First}${infer Rest}`
  ? First | StringToUnion<Rest>
  : never

export type StringToUnionResult = StringToUnion<`hello world`>

// 注意递归处理方向 每次新增加的元素在左边 后续加的才在更左边
export type ReverseString<
  Str extends string,
  Result extends string = ``,
> = Str extends `${infer First}${infer Rest}` ? ReverseString<Rest, `${First}${Result}`> : Result

export type ReverseStringResult = ReverseString<`hello world`>

type DeepObj = {
  a: {
    b: {
      c: {
        f: () => 'dong'
        d: {
          e: {
            name: string
          }
        }
      }
    }
  }
}
export type DeepReadonly<T extends Record<string, any>> = {
  readonly [Key in keyof T]: T[Key] extends object
    ? T[Key] extends Function
      ? T[Key]
      : DeepReadonly<T[Key]>
    : T[Key]
}
// 触发计算
export type DeepReadonlyOptimazed<T extends Record<string, any>> = T extends any
  ? {
      readonly [Key in keyof T]: T[Key] extends object
        ? T[Key] extends Function
          ? T[Key]
          : DeepReadonlyOptimazed<T[Key]>
        : T[Key]
    }
  : never
export type DeepReadonlyResult = DeepReadonly<DeepObj>
export type DeepReadonlyOptimazedResult = DeepReadonlyOptimazed<DeepObj>
