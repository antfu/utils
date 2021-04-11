/**
 * Promise, or maybe not
 */
export type Thenable<T> = T | Promise<T>

/**
 * Null or underfind whatever
 */
export type Nullable<T> = T | null | undefined | void

/**
 * Array, or not yet
 */
export type Arrayable<T> = T | Array<T>

/**
 * Function
 */
export type Fn<T = void> = () => T

/**
 * Infers the element type of an array
 */
export type ElementOf<T> = T extends (infer E)[] ? E : never
