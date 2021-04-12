/**
 * Promise, or maybe not
 */
export type Awaitable<T> = T | PromiseLike<T>

/**
 * Null or underfind whatever
 */
export type Nullable<T> = T | null | undefined

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
