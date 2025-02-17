import { expect, it } from 'vitest'
import { isPrimitive } from './is'

it('isPrimitive', () => {
  expect(isPrimitive(null)).toBe(true)
  expect(isPrimitive(undefined)).toBe(true)
  expect(isPrimitive(0)).toBe(true)
  expect(isPrimitive('')).toBe(true)
  expect(isPrimitive(Symbol('foo'))).toBe(true)
  expect(isPrimitive(1n)).toBe(true)

  expect(isPrimitive([])).toBe(false)
  expect(isPrimitive({})).toBe(false)

  class Foo {}
  expect(isPrimitive(new Foo())).toBe(false)
  expect(isPrimitive(new Map())).toBe(false)
})
