export const assert = (condition: boolean, message: string): asserts condition => {
  if (!condition) throw new Error(message)
}
export const toString = Object.prototype.toString
export const noop = () => {}
