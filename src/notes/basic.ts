// 字面量类型

// String
const name = `ntnyq`

// Number
const age = 28

// Boolean
const isMale = true

// Symbol
const symbol = Symbol(`symbol`)

// Array
const animals: string[] = [`cat`, `dog`, `tiger`]
const grades: Array<number> = [95, 25, 30]

// Enum
enum Direction {
  TOP = 1,
  BOTTOM,
  LEFT,
  RIGHT,
}
enum GENDER {
  MALE = `male`,
  FEMALE = `female`,
}

// Any 可执行所有操作 可被赋值所有类型 除了 never
const any: any = `hello world`

export const num1 = (<string>any).length
export const num2 = (any as string).length

function getFile(file: `${string}.jpg`) {
  return file
}

getFile('a.jpg')

// Unknown 可被赋值所有类型，但只能赋值给unknown或者any
const unknown: unknown = 28

// 类型别名
type Dictionary<T> = Record<string, T>

// Tuple 元祖
const config: [string, Dictionary<string | number>, string?] = [
  `error`,
  {
    ignore: `^foobar`,
    level: 2,
  },
  `test`,
]

// Void
const unusable: void = undefined

// Null && undefined
const n = null
const u = undefined

type NumberGenerator = () => number

function myFunc(numGenerator?: NumberGenerator): number {
  return numGenerator?.() || 0
}

export function getPropValue<T extends Object, Key extends keyof T>(obj: T, key: Key): T[Key] {
  return obj[key]
}

export {
  name,
  age,
  isMale,
  symbol,
  animals,
  grades,
  Direction,
  GENDER,
  any,
  unknown,
  config,
  unusable,
  n,
  u,
  getFile,
  myFunc,
}
