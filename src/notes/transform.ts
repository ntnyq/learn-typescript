/**
 * @file 重新构造做变换
 */

// TS 3种可以声明任意类型的变量 type infer 类型参数 但不能重新赋值

// type 类型别名 声明一个变量存储某个类型
export type PromiseNumber = Promise<number>

// inter 类型提取 提取类型存储到变量内，相当于局部变量
export type GetValueType<P> = P extends Promise<infer Value> ? Value : never

// 类型参数 用于接收具体类型，在类型运算中相当于局部变量
export type IsTwo<T> = T extends 2 ? true : false

// 索引类型叫做映射类型 as 操作符叫重映射

/**
 * 重新构造类型
 */
export type NumberTuple = [1, 2, 3]

export type Push<Arr extends unknown[], Ele> = [...Arr, Ele]
export type PushResult = Push<[1, 2, 3], 4>

export type Unshift<Arr extends unknown[], Ele> = [Ele, ...Arr]

export type Zip<One extends [unknown, unknown], Other extends [unknown, unknown]> = One extends [
  infer OneFirst,
  infer OneSecond,
]
  ? Other extends [infer OtherFirst, infer OtherSecond]
    ? [[OneFirst, OtherFirst], [OneSecond, OtherSecond]]
    : []
  : []
export type ZipResult = Zip<[1, 2], [`foo`, `bar`]>

export type Zip2<One extends unknown[], Other extends unknown[]> = One extends [
  infer OneFirst,
  ...infer OneRest,
]
  ? Other extends [infer OtherFirst, ...infer OtherRest]
    ? [[OneFirst, OtherFirst], ...Zip2<OneRest, OtherRest>]
    : []
  : []
export type Zip2Result = Zip2<[1, 2, 3, 4, 5], [`foo`, `bar`, `baz`, `jaz`, `quo`]>

// String
export type Capitalize<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${Uppercase<First>}${Rest}`
  : S
export type CapitalizeResult = Capitalize<`hello`>

export type CamelCase<S extends string> = S extends `${infer Left}_${infer Right}${infer Rest}`
  ? `${Left}${Uppercase<Right>}${CamelCase<Rest>}`
  : S
export type CamelCaseResult = CamelCase<`hello_world_ntnyq`>

export type DropSubString<
  S extends string,
  Sub extends string,
> = S extends `${infer Prefix}${Sub}${infer Suffix}` ? DropSubString<`${Prefix}${Suffix}`, Sub> : S
export type DropSubStringResult = DropSubString<`foobarfoo`, `foo`>

// 函数
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export type AppendArgument<Func extends Function, Arg> = Func extends (
  ...args: infer Args
) => infer ReturnType
  ? (...args: [...Args, Arg]) => ReturnType
  : never
export type AppendArgumentResult = AppendArgument<(number: string) => boolean, number>

// 索引类型
export type Person = {
  name: string
  readonly age: number
  gender?: boolean
}

export type Mapping<O extends object> = {
  [K in keyof O]: [O[K], O[K], O[K]]
}
export type MappingResult = Mapping<Person>

export type UppercaseKey<O extends object> = {
  [Key in keyof O as Uppercase<Key & string>]: O[Key]
}
export type UppercaseKeyResult = UppercaseKey<Person>

// Record
export type CusRecord<K extends string | number | symbol, T> = {
  [P in K]: T
}
export type UppercaseKey2<O extends Record<string, any>> = {
  [Key in keyof O as Uppercase<Key & string>]: O[Key]
}
export type UppercaseKey2Result = UppercaseKey2<Person>

export type CusReadonly<T> = {
  readonly [Key in keyof T]: T[Key]
}
export type CusReadonlyResult = CusReadonly<Person>

export type CusPartial<T> = {
  [Key in keyof T]?: T[Key]
}
export type CusPartialResult = CusPartial<Person>

export type CusMutate<T> = {
  -readonly [Key in keyof T]: T[Key]
}
export type CusMutateResult = CusMutate<CusReadonly<Person>>

export type CusRequired<T> = {
  [Key in keyof T]-?: T[Key]
}
export type CusRequiredResult = CusRequired<CusPartial<Person>>

export type FilterByValueType<O extends Record<string, any>, ValueType> = {
  [Key in keyof O as O[Key] extends ValueType ? Key : never]: O[Key]
}
export type FilterByValueTypeResult = FilterByValueType<Person, string | number>
