export const assert = (condition: boolean, ...infos: any[]) => { if (!condition) throw new Error(...infos) }
export const toString = Object.prototype.toString
export const noop = () => {}
