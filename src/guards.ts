import { Nullable } from './types'

/**
 * Type guard to filter out null-ish values
 *
 * @example array.filter(isNotNull)
 */
export function isNotNull<T>(v: Nullable<T>): v is T {
  return v != null
}

/**
 * Type guard to filter out falsy values
 *
 * @example array.filter(isTruthy)
 */
export function isTruthy<T>(v: Nullable<T>): v is T {
  return Boolean(v)
}
