/**
 * @file 模式匹配做提取
 */

// 模式匹配是通过 extends 对类型参数做匹配，结果保存在 infer 声明的局部类型变量中，如果匹配就能从局部变量中得到此类型
export type P = Promise<'ntnyq'>

export type PGetName<P> = P extends Promise<infer Value> ? Value : never

export type PName = PGetName<P>

// 数组 解构赋值 先约束
// unknown 只接收任意类型的值 而 any 还能赋值给除 never 外的任意类型
export type Arr = [1, 2, 3]
export type FirstOfArray<Arr extends unknown[]> = Arr extends [infer First, ...unknown[]]
  ? First
  : never
export type LastOfArray<Arr extends unknown[]> = Arr extends [...unknown[], infer Last]
  ? Last
  : never
export type FirstResult = FirstOfArray<Arr>
export type LastResult = LastOfArray<Arr>

export type PopArr<Arr extends unknown[]> = Arr extends []
  ? []
  : Arr extends [...infer Rest, unknown]
    ? Rest
    : never
export type ShiftArr<Arr extends unknown[]> = Arr extends []
  ? []
  : Arr extends [unknown, ...infer Rest]
    ? Rest
    : never
export type EmptyArr = PopArr<[]>
export type PopArrResult = PopArr<Arr>
export type ShiftArrResult = ShiftArr<Arr>

// 字符串
export type StartWith<Str extends string, Prefix extends string> = Str extends `${Prefix}${string}`
  ? true
  : false

export type IsStartWith = StartWith<`hello world`, `hello`>

export type NotStartWith = StartWith<`hello world`, `foobar`>

export type ReplaceString<
  Str extends string,
  From extends string,
  To extends string,
> = Str extends `${infer Prefix}${From}${infer Suffix}` ? `${Prefix}${To}${Suffix}` : Str

export type ReplaceResult = ReplaceString<`Hello ? test`, `?`, `world`>

export type TrimRight<Str extends string> = Str extends `${infer Rest}${' ' | `\n` | `\t`}`
  ? TrimRight<Rest>
  : Str
export type TrimLeft<Str extends string> = Str extends `${' ' | `\n` | `\t`}${infer Rest}`
  ? TrimLeft<Rest>
  : Str
export type Trim<Str extends string> = TrimLeft<TrimRight<Str>>

export type TrimRightResult = TrimRight<`hello       `>
export type TrimLeftResult = TrimLeft<`       hello`>
export type TrimResult = Trim<`     hello      `>

// 函数 提取参数类型
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export type GetParameters<Func extends Function> = Func extends (...args: infer Args) => unknown
  ? Args
  : never

export type GetParametersResult = GetParameters<(name: string, age: number) => string>

// 不能使用 unknown 涉及参数的逆变性质
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export type GetReturnType<Func extends Function> = Func extends (...args: any[]) => infer ReturnType
  ? ReturnType
  : never

export type GetReturnTypeResult = GetReturnType<() => string>
export type GetReturnTypeResult2 = GetReturnType<(name: string, age: number) => string>

export class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  greet(this: Animal) {
    return `hello, this is ${this.name}`
  }
}

export type GetThisParameterType<T> = T extends (this: infer ThisType, ...args: any[]) => any
  ? ThisType
  : unknown
export const dog = new Animal(`dog`)
export type GetThisParameterTypeResult = GetThisParameterType<typeof dog.greet>

// 构造器
interface Person {
  name: string
}
interface PersonConstructor {
  new (name: string): Person
}
export type GetInstanceType<ConstuctorType extends new (...args: any[]) => any> =
  ConstuctorType extends new (...args: any[]) => infer InstanceType ? InstanceType : any
export type GetInstanceTypeResult = GetInstanceType<PersonConstructor>

export type GetConstructorParameters<ConstuctorType extends new (...args: any[]) => any> =
  ConstuctorType extends new (...args: infer ParameterType) => any ? ParameterType : never

export type GetConstructorParametersResult = GetConstructorParameters<PersonConstructor>

// 索引类型
export type GetRefProps<Props> = 'ref' extends keyof Props
  ? Props extends { ref?: infer Value | undefined }
    ? Value
    : never
  : never

export type GetRefPropsResult = GetRefProps<{ ref?: 234; name: `ntnyq` }>
export type GetRefPropsResult2 = GetRefProps<{ ref?: undefined; name: `ntnyq` }>
