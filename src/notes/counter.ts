/**
 * @file 数组长度做计数
 */

/**
 * 因为使用元祖length计数 所以无法处理负数和浮点数
 */

// 四则运算
// 将数字的四则运算转换为对元祖[数组]的提取和构造
export type ArrLen = [unknown][`length`]

export type BuildArray<
  Length extends number,
  Ele = unknown,
  Arr extends unknown[] = [],
> = Arr[`length`] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>

export type Add<Num1 extends number, Num2 extends number> = [
  ...BuildArray<Num1>,
  ...BuildArray<Num2>,
][`length`]

export type AddResult = Add<5, 10>

export type Subtract<Num1 extends number, Num2 extends number> =
  BuildArray<Num1> extends [...arr1: BuildArray<Num2>, ...arr2: infer Rest] ? Rest[`length`] : never

export type SubtractResult = Subtract<32, 14>

export type Multiply<
  Num1 extends number,
  Num2 extends number,
  Result extends unknown[] = [],
> = Num2 extends 0
  ? Result[`length`]
  : Multiply<Num1, Subtract<Num2, 1>, [...BuildArray<Num1>, ...Result]>

export type MultiplyResult = Multiply<25, 25>

export type Divide<
  Num1 extends number,
  Num2 extends number,
  Count extends unknown[] = [],
> = Num1 extends 0 ? Count[`length`] : Divide<Subtract<Num1, Num2>, Num2, [unknown, ...Count]>

export type DivideResult = Divide<24, 6>

// 字符串计数
export type StrLen<
  Str extends string,
  Counter extends unknown[] = [],
> = Str extends `${string}${infer Rest}` ? StrLen<Rest, [...Counter, unknown]> : Counter[`length`]

export type StrLenResult = StrLen<`hello world`>

export type GreaterThan<
  Num1 extends number,
  Num2 extends number,
  Counter extends unknown[] = [],
> = Num1 extends Num2
  ? false
  : Counter[`length`] extends Num2
    ? true
    : Counter[`length`] extends Num1
      ? false
      : GreaterThan<Num1, Num2, [...Counter, unknown]>

export type GreaterThanResult = GreaterThan<888, 2>

export type FibonacciLoop<
  PrevArr extends number[],
  CurrentArr extends number[],
  IndexArr extends unknown[] = [],
  Num extends number = 1,
> = IndexArr[`length`] extends Num
  ? CurrentArr[`length`]
  : FibonacciLoop<CurrentArr, [...PrevArr, ...CurrentArr], [...IndexArr, unknown], Num>

export type Fibonacci<Num extends number> = FibonacciLoop<[], [1], [], Num>

export type FibonacciResult = Fibonacci<7>
