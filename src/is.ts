import { toString } from './base'

export const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined'
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isFunction = <T extends Function> (val: any): val is T => typeof val === 'function'
export const isNumber = (val: any): val is number => typeof val === 'number'
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isObject = (val: any): val is Record<any, any> => toString(val) === "[object Object]";
export const isUndefined = (val: any): val is undefined => toString(val) === '[object Undefined]'
export const isNull = (val: any): val is null => toString(val) === '[object Null]'
export const isRegExp = (val: any): val is RegExp => toString(val) === '[object RegExp]'
export const isDate = (val: any): val is Date => toString(val) === '[object Date]'
export const isMap = (val: any): val is Map<any, any> => toString(val) === "[object Map]";
export const isSet = (val: any): val is Set<any> => toString(val) === "[object Set]";
export const isPromise = <T = any>(val: any): val is Promise<T> =>
  isObject(val) && isFunction(val.then) && isFunction(val.catch);
// @ts-ignore
export const isWindow = (val: any): boolean => typeof window !== 'undefined' && toString(val) === '[object Window]'
// @ts-ignore
export const isBrowser = typeof window !== 'undefined'
