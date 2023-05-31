import { flattenArrayable } from './array'

export function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

export function sum(...args: number[] | number[][]) {
  return flattenArrayable(args).reduce((a, b) => a + b, 0)
}

/**
 * Linearly interpolates between `min` and `max` based on `t`
 *
 * @category Math
 * @param t The interpolation value clamped between 0 and 1
 * @example
 * ```
 * const value = lerp(0, 2, 0.5) // value will be 1
 * ```
 */
export function lerp(min: number, max: number, t: number) {
  const interpolation = clamp(t, 0.0, 1.0)
  return min + (max - min) * interpolation
}

/**
 * Linearly remaps a clamped value from its source range [`inMin`, `inMax`] to the destination range [`outMin`, `outMax`]
 *
 * @category Math
 * @example
 * ```
 * const value = remap(0.5, 0, 1, 200, 400) // value will be 300
 * ```
 */
export function remap(n: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  const interpolation = (n - inMin) / (inMax - inMin)
  return lerp(outMin, outMax, interpolation)
}
