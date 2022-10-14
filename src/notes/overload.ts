// 函数重载
// 1. 使用 declare
declare function func1(val: string): string
declare function func1(val: number): number

// 2. 使用 interface
interface GetValue2 {
  (val: string): string
  (val: number): number
}
declare const func2: GetValue2

// 3. 交叉类型
export type GetValue3 = ((name: string) => string) & ((name: number) => number)
declare const func3: GetValue3

func2(`hello`)
func2(123)

func3(`hello`)
func3(123)

// UnionToTuple
// ReturnType 返回最后一个重载类型
export type res1 = ReturnType<typeof func1>
export type res2 = ReturnType<GetValue2>
export type res3 = ReturnType<GetValue3>
