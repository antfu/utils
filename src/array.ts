import type { Arrayable, Nullable } from './types'
import { clamp } from './math'

/**
 * Convert `Arrayable<T>` to `Array<T>`
 *
 * @category Array
 */
export function toArray<T>(array?: Nullable<Arrayable<T>>): Array<T> {
  array = array ?? []
  return Array.isArray(array) ? array : [array]
}

/**
 * Convert `Arrayable<T>` to `Array<T>` and flatten it
 *
 * @category Array
 */
export function flattenArrayable<T>(array?: Nullable<Arrayable<T | Array<T>>>): Array<T> {
  return toArray(array).flat(1) as Array<T>
}

/**
 * Use rest arguments to merge arrays
 *
 * @category Array
 */
export function mergeArrayable<T>(...args: Nullable<Arrayable<T>>[]): Array<T> {
  return args.flatMap(i => toArray(i))
}

export type PartitionFilter<T> = (i: T, idx: number, arr: readonly T[]) => any

/**
 * Divide an array into two parts by a filter function
 *
 * @category Array
 * @example const [odd, even] = partition([1, 2, 3, 4], i => i % 2 != 0)
 */
export function partition<T>(array: readonly T[], f1: PartitionFilter<T>): [T[], T[]]
export function partition<T>(array: readonly T[], f1: PartitionFilter<T>, f2: PartitionFilter<T>): [T[], T[], T[]]
export function partition<T>(array: readonly T[], f1: PartitionFilter<T>, f2: PartitionFilter<T>, f3: PartitionFilter<T>): [T[], T[], T[], T[]]
export function partition<T>(array: readonly T[], f1: PartitionFilter<T>, f2: PartitionFilter<T>, f3: PartitionFilter<T>, f4: PartitionFilter<T>): [T[], T[], T[], T[], T[]]
export function partition<T>(array: readonly T[], f1: PartitionFilter<T>, f2: PartitionFilter<T>, f3: PartitionFilter<T>, f4: PartitionFilter<T>, f5: PartitionFilter<T>): [T[], T[], T[], T[], T[], T[]]
export function partition<T>(array: readonly T[], f1: PartitionFilter<T>, f2: PartitionFilter<T>, f3: PartitionFilter<T>, f4: PartitionFilter<T>, f5: PartitionFilter<T>, f6: PartitionFilter<T>): [T[], T[], T[], T[], T[], T[], T[]]
export function partition<T>(array: readonly T[], ...filters: PartitionFilter<T>[]): any {
  const result: T[][] = Array.from({ length: filters.length + 1 }).fill(null).map(() => [])

  array.forEach((e, idx, arr) => {
    let i = 0
    for (const filter of filters) {
      if (filter(e, idx, arr)) {
        result[i].push(e)
        return
      }
      i += 1
    }
    result[i].push(e)
  })
  return result
}

/**
 * Unique an Array
 *
 * @category Array
 */
export function uniq<T>(array: readonly T[]): T[] {
  return Array.from(new Set(array))
}

/**
 * Unique an Array by a custom equality function
 *
 * @category Array
 */
export function uniqueBy<T>(array: readonly T[], equalFn: (a: any, b: any) => boolean): T[] {
  return array.reduce((acc: T[], cur: any) => {
    const index = acc.findIndex((item: any) => equalFn(cur, item))
    if (index === -1)
      acc.push(cur)
    return acc
  }, [])
}

/**
 * Get last item
 *
 * @category Array
 */
export function last(array: readonly []): undefined
export function last<T>(array: readonly T[]): T
export function last<T>(array: readonly T[]): T | undefined {
  return at(array, -1)
}

/**
 * Remove an item from Array
 *
 * @category Array
 */
export function remove<T>(array: T[], value: T) {
  if (!array)
    return false
  const index = array.indexOf(value)
  if (index >= 0) {
    array.splice(index, 1)
    return true
  }
  return false
}

/**
 * Get nth item of Array. Negative for backward
 *
 * @category Array
 */
export function at(array: readonly [], index: number): undefined
export function at<T>(array: readonly T[], index: number): T
export function at<T>(array: readonly T[] | [], index: number): T | undefined {
  const len = array.length
  if (!len)
    return undefined

  if (index < 0)
    index += len

  return array[index]
}

/**
 * Genrate a range array of numbers. The `stop` is exclusive.
 *
 * @category Array
 */
export function range(stop: number): number[]
export function range(start: number, stop: number, step?: number): number[]
export function range(...args: any): number[] {
  let start: number, stop: number, step: number

  if (args.length === 1) {
    start = 0
    step = 1;
    ([stop] = args)
  }
  else {
    ([start, stop, step = 1] = args)
  }

  const arr: number[] = []
  let current = start
  while (current < stop) {
    arr.push(current)
    current += step || 1
  }

  return arr
}

/**
 * Move element in an Array
 *
 * @category Array
 * @param arr
 * @param from
 * @param to
 */
export function move<T>(arr: T[], from: number, to: number) {
  arr.splice(to, 0, arr.splice(from, 1)[0])
  return arr
}

/**
 * Clamp a number to the index range of an array
 *
 * @category Array
 */
export function clampArrayRange(n: number, arr: readonly unknown[]) {
  return clamp(n, 0, arr.length - 1)
}

/**
 * Get random item(s) from an array
 *
 * @param arr
 * @param quantity - quantity of random items which will be returned
 */
export function sample<T>(arr: T[], quantity: number) {
  return Array.from({ length: quantity }, _ => arr[Math.round(Math.random() * (arr.length - 1))])
}

/**
 * Shuffle an array. This function mutates the array.
 *
 * @category Array
 */
export function shuffle<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

// https://jsbenchmark.com/#eyJjYXNlcyI6W3siaWQiOiJXR01CMEJLVXgwbUJDYVc3NmFHSVciLCJjb2RlIjoibGV0IGEgPSBEQVRBXG5hID0gZmlsdGVyKGEsIGkgPT4gaSAlIDUwID09PSAwKVxuYSA9IGZpbHRlcihhLCBpID0-IGkgJSAxMCA9PT0gMClcbmEgPSBmaWx0ZXIoYSwgaSA9PiBpICUgMiA9PT0gMCkiLCJuYW1lIjoiZmlsdGVyIiwiZGVwZW5kZW5jaWVzIjpbXX0seyJpZCI6Ik9VSnozNU1QTkdhWVZ2eVo3S3A1UiIsImNvZGUiOiJsZXQgYSA9IERBVEFcbmEgPSBmaWx0ZXJJblBsYWNlKGEsIGkgPT4gaSAlIDUwID09PSAwKVxuYSA9IGZpbHRlckluUGxhY2UoYSwgaSA9PiBpICUgMTAgPT09IDApXG5hID0gZmlsdGVySW5QbGFjZShhLCBpID0-IGkgJSAyID09PSAwKSIsIm5hbWUiOiJmaWx0ZXJJblBsYWNlIiwiZGVwZW5kZW5jaWVzIjpbXX1dLCJjb25maWciOnsibmFtZSI6IkJhc2ljIGV4YW1wbGUiLCJwYXJhbGxlbCI6dHJ1ZSwiZ2xvYmFsVGVzdENvbmZpZyI6eyJkZXBlbmRlbmNpZXMiOltdfSwiZGF0YUNvZGUiOiJnbG9iYWxUaGlzLmZpbHRlciA9IGZ1bmN0aW9uIGZpbHRlcihkYXRhLCBwcmVkaWNhdGUpIHtcbiAgcmV0dXJuIGRhdGEuZmlsdGVyKHByZWRpY2F0ZSlcbn1cblxuZ2xvYmFsVGhpcy5maWx0ZXJJblBsYWNlID0gZnVuY3Rpb24gZmlsdGVySW5QbGFjZShkYXRhLCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQgaSA9IGRhdGEubGVuZ3RoOyBpLS07IGk-PTApIHtcbiAgICBpZiAoIXByZWRpY2F0ZShkYXRhW2ldLCBpLCBkYXRhKSlcbiAgICAgIGRhdGEuc3BsaWNlKGksIDEpXG4gIH1cbiAgcmV0dXJuIGRhdGFcbn1cblxucmV0dXJuIFsuLi5BcnJheSgxMDAwKS5rZXlzKCksLi4uQXJyYXkoMTAwMCkua2V5cygpLC4uLkFycmF5KDEwMDApLmtleXMoKV0ifX0
/**
 * Filter out items from an array in place.
 * This function mutates the array.
 * `predicate` get through the array from the end to the start for performance.
 *
 * Expect this function to be faster than using `Array.prototype.filter` on large arrays.
 *
 * @category Array
 */
export function filterInPlace<T>(array: T[], predicate: (item: T, index: number, arr: T[]) => unknown) {
  for (let i = array.length; i--; i >= 0) {
    if (!predicate(array[i], i, array))
      array.splice(i, 1)
  }
  return array
}
