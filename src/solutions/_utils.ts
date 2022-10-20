/**
 * Create an array
 */
export type CreateArray<
  Length extends number,
  Ele = unknown,
  Result extends unknown[] = [],
> = Result[`length`] extends Length ? Result : CreateArray<Length, Ele, [...Result, Ele]>
