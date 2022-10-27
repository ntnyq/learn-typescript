/**
 * @link https://github.com/type-challenges/type-challenges/blob/main/questions/09155-Hard-validdate/README.md
 */

import type { Equal, Expect } from '@type-challenges/utils'

type $0_9 = `0` | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9`
type $1_9 = Exclude<$0_9, `0`>
type $0_8 = Exclude<$0_9, `9`>
type $01_09 = `0${$1_9}`
type $10_19 = `1${$0_9}`
type $20_28 = `2${$0_8}`
type $20_29 = `2${$0_9}`
type $30 = `30`
type $30_31 = $30 | `31`
type MonthOf31Days = `01` | `03` | `05` | `07` | `08` | `10` | `12`
type MonthOf30Days = `04` | `06` | `09` | `11`
type $M31 = `${MonthOf31Days}${$01_09 | $10_19 | $20_29 | $30_31}`
type $M30 = `${MonthOf30Days}${$01_09 | $10_19 | $20_29 | $30}`
type $M28 = `02${$01_09 | $10_19 | $20_28}`
type Date = $M31 | $M30 | $M28

type ValidDate<T extends string> = T extends Date ? true : false

export type cases = [
  Expect<Equal<ValidDate<'0102'>, true>>,
  Expect<Equal<ValidDate<'0131'>, true>>,
  Expect<Equal<ValidDate<'1231'>, true>>,
  Expect<Equal<ValidDate<'0229'>, false>>,
  Expect<Equal<ValidDate<'0100'>, false>>,
  Expect<Equal<ValidDate<'0132'>, false>>,
  Expect<Equal<ValidDate<'1301'>, false>>,
  Expect<Equal<ValidDate<'0123'>, true>>,
  Expect<Equal<ValidDate<'01234'>, false>>,
  Expect<Equal<ValidDate<''>, false>>,
]
