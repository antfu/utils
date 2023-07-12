import { describe, expect, it } from 'vitest'
import { isArrayEmpty, isEmpty, isObjectEmpty } from './is'

describe('isArrayEmpty', () => {
  it('Empty array should give true', () => {
    const a: unknown[] = []
    expect(isArrayEmpty(a)).toBe(true)

    a.push(1)
    expect(isArrayEmpty(a)).toBe(false)

    a.pop()
    expect(isArrayEmpty(a)).toBe(true)

    expect(isArrayEmpty([])).toBe(true)
    expect(isArrayEmpty([])).toBe(true)

    expect(isArrayEmpty([1])).toBe(false)
    expect(isArrayEmpty(['item'])).toBe(false)
    expect(isArrayEmpty(new Array('item'))).toBe(false)

    // As we don't check for nested array, this is false
    expect(isArrayEmpty([[]])).toBe(false)
  })

  it('Non array should give false', () => {
    expect(isArrayEmpty({})).toBe(false)
    expect(isArrayEmpty('')).toBe(false)
    expect(isArrayEmpty(1)).toBe(false)
    expect(isArrayEmpty(null)).toBe(false)
    expect(isArrayEmpty(undefined)).toBe(false)
  })
})

describe('isObjectEmpty', () => {
  it('Empty object should give true', () => {
    const a: { num?: number } = {}
    expect(isObjectEmpty(a)).toBe(true)

    a.num = 1
    expect(isObjectEmpty(a)).toBe(false)

    delete a.num
    expect(isObjectEmpty(a)).toBe(true)

    expect(isObjectEmpty({})).toBe(true)

    // eslint-disable-next-line no-new-object
    expect(isObjectEmpty(new Object())).toBe(true)

    expect(isObjectEmpty({ a: 1 })).toBe(false)
    expect(isObjectEmpty({ a: 'item' })).toBe(false)

    // eslint-disable-next-line no-new-object
    expect(isObjectEmpty(new Object({ a: 'item' }))).toBe(false)
  })

  it('Non object should give false', () => {
    expect(isObjectEmpty([])).toBe(false)
    expect(isObjectEmpty('')).toBe(false)
    expect(isObjectEmpty(1)).toBe(false)
    expect(isObjectEmpty(null)).toBe(false)
    expect(isObjectEmpty(undefined)).toBe(false)
  })
})

describe('isEmpty', () => {
  it('Checking various empty values', () => {
    expect(isEmpty({})).toBe(true)
    expect(isEmpty('')).toBe(true)
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
  })

  it('Checking various non empty values', () => {
    expect(isEmpty(0)).toBe(false)
    expect(isEmpty({ a: 1 })).toBe(false)
    expect(isEmpty([1])).toBe(false)
    expect(isEmpty('a')).toBe(false)

    // As we don't check for nested array, this is false
    expect(isEmpty([[]])).toBe(false)
  })
})
