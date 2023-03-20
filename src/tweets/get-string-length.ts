/**
 * Code snippets from https://twitter.com/trunarla/status/1633867853727408128
 */

export function getStringLengthByObjectKeys(input: string) {
  return Object.keys({ ...(input as Object) }).reduce(len => len + 1, 0)
}

export function getStringLengthByArrayPop(input: string) {
  return [...[0, ...input].keys()].pop()
}

export function getStringLengthByEval(input: string) {
  return eval(input.replace(/./g, '1+') + 0)
}

export function getStringLengthByCharCode(input: string) {
  const key: string = [0, -7, 2, -5, 8, -4]
    .map(n =>
      globalThis[(typeof input).replace(/\w/, c => c.toUpperCase()) as 'String'].fromCharCode(
        108 + n,
      ),
    )
    .join('')
  return input[key as 'length']
}

export function getStringLengthByRecursive(input: string): number {
  if (input === '') {
    return 0
  } else {
    return 1 + getStringLengthByRecursive(input.substring(1))
  }
}

export function getStringLengthByIife(input: string) {
  return (count => {
    for (const c of input[Symbol.iterator]()) {
      count += c.codePointAt(0)! > (1 << 16) - 1 ? 1 << 1 : 1 << 0
    }
    return count
  })(0)
}

// count emoji as 1
export function getStringLengthBySet(input: string) {
  const set = new Set<{ char: string }>()
  for (const char of input) {
    set.add({ char })
  }
  return set.size
}

// export function getStringLengthByBinary(input: string) {
//   const binaryString = input
//     .split('')
//     .map(char => char.charCodeAt(0).toString(2))
//     .join('')
//   const binaryNumber = parseInt(binaryString, 2)
//   const squareRoot = Math.sqrt(binaryNumber)
//   const lengthString = squareRoot.toString()
//   const length = lengthString.slice(0, lengthString.indexOf('.'))
//   return Number(length)
// }

export function getStringLengthByCharCodeAt(input: string) {
  return [...input].map(c => (c.charCodeAt(0) >> 11) + 1).reduce((a, b) => a + b)
}

export async function getStringLengthByAsyncFn(input: string) {
  const numWorkers = globalThis?.navigator?.hardwareConcurrency ?? 2
  const chunkSize = Math.ceil(input.length / numWorkers)
  const promises: Array<Promise<number>> = []

  for (let i = 0; i < numWorkers; i++) {
    const start = i * chunkSize
    const end = start + chunkSize
    const chunk = input.slice(start, end)
    promises.push(
      new Promise(async resolve => {
        let count = 0
        for await (const _ of chunk) {
          count++
        }
        resolve(count)
      }),
    )
  }

  const counts = await Promise.all(promises)
  const total = counts.reduce((acc, curr) => acc + curr)

  return total
}
