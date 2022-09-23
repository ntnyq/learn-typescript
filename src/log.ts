/**
 * Log message to console
 * @param msg Message
 */
export default function (msg: string) {
  console.log(msg)
}

export function getPropValue<
  T extends Object,
  Key extends keyof T,
 > (obj: T, key: Key): T[Key] {
  return obj[key]
}
