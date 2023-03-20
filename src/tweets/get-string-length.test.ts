import { it, expect } from 'vitest'
import {
  getStringLengthByObjectKeys,
  getStringLengthByArrayPop,
  getStringLengthByEval,
  getStringLengthByCharCode,
  getStringLengthByRecursive,
  getStringLengthByIife,
  getStringLengthBySet,
  getStringLengthByCharCodeAt,
  getStringLengthByAsyncFn,
} from './get-string-length'

type ICase = [string, number]
const cases: ICase[] = [[`hello world`, 11]]

it('getStringLengthByObjectKeys', () => {
  cases.forEach(([input, length]) => {
    expect(getStringLengthByObjectKeys(input)).toBe(length)
  })
})

it('getStringLengthByArrayPop', () => {
  cases.forEach(([input, length]) => {
    expect(getStringLengthByArrayPop(input)).toBe(length)
  })
})

it('getStringLengthByEval', () => {
  cases.forEach(([input, length]) => {
    expect(getStringLengthByEval(input)).toBe(length)
  })
})

it('getStringLengthByCharCode', () => {
  cases.forEach(([input, length]) => {
    expect(getStringLengthByCharCode(input)).toBe(length)
  })
})

it('getStringLengthByRecursive', () => {
  cases.forEach(([input, length]) => {
    expect(getStringLengthByRecursive(input)).toBe(length)
  })
})

it('getStringLengthByIife', () => {
  cases.forEach(([input, length]) => {
    expect(getStringLengthByIife(input)).toBe(length)
  })
})

it('getStringLengthBySet', () => {
  cases.forEach(([input, length]) => {
    expect(getStringLengthBySet(input)).toBe(length)
  })
})

it('getStringLengthByCharCodeAt', () => {
  cases.forEach(([input, length]) => {
    expect(getStringLengthByCharCodeAt(input)).toBe(length)
  })
})

it('getStringLengthByAsyncFn', () => {
  cases.forEach(async ([input, length]) => {
    const count = await getStringLengthByAsyncFn(input)
    expect(count).toBe(length)
  })
})
