import { Fn, Nullable } from './types'

/**
 * Call every functions in an array
 */
export function batchInvoke(functions: Nullable<Fn>[]) {
  functions.forEach(fn => fn && fn())
}

/**
 * Call the function
 */
export function invoke(fn: Fn) {
  return fn()
}

/**
 * Pass the value through the callback, and return the former.
 */
export function tap<T>(value: T, callback: (value: T) => void): T {
  callback(value)
  return value
}
