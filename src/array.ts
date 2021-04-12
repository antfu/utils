import { Arrayable, Nullable } from './types'

/**
 * Convert Arrayable<T> to Array<T>
 */
export function toArray<T>(array?: Nullable<Arrayable<T>>): Array<T> {
  array = array || []
  if (Array.isArray(array))
    return array
  return [array]
}

/**
 * Convert Arrayable<T> to Array<T>
 */
export function flattenArrayable<T>(array?: Nullable<Arrayable<T | Array<T>>>): Array<T> {
  return toArray(array).flat(1) as Array<T>
}

/**
 * Use rest arguments to merge arrays
 */
export function mergeArrayable<T>(...args: Nullable<Arrayable<T>>[]): Array<T> {
  return args.flatMap(i => toArray(i))
}

/**
 * Divide an array into two parts by a filter function.
 *
 * @example const [odd, even] = partition([1, 2, 3, 4], i => i % 2 != 0)
 */
export function partition<T>(array: readonly T[], filter: (i: T, idx: number, arr: readonly T[]) => any) {
  const pass: T[] = []
  const fail: T[] = []
  array.forEach((e, idx, arr) => (filter(e, idx, arr) ? pass : fail).push(e))
  return [pass, fail]
}

export function uniq<T>(array: readonly T[]): T[] {
  return Array.from(new Set(array))
}

export function last<T>(array: readonly T[]): T | undefined {
  if (!array.length)
    return undefined
  return array[array.length - 1]
}
