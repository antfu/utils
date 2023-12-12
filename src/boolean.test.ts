import { expect, it } from 'vitest'
import { toBoolean } from './boolean'

it('toBoolean', () => {
  expect(toBoolean(false)).toBe(false)
  expect(toBoolean(null)).toBe(false)
  expect(toBoolean(undefined)).toBe(false)
  expect(toBoolean('')).toBe(false)
  expect(toBoolean('0')).toBe(false)
  expect(toBoolean('false')).toBe(false)
  expect(toBoolean('FALSE')).toBe(false)
  expect(toBoolean(0)).toBe(false)
  expect(toBoolean({})).toBe(false)
  expect(toBoolean([])).toBe(false)
  expect(toBoolean(() => {})).toBe(false)

  expect(toBoolean(true)).toBe(true)
  expect(toBoolean('1')).toBe(true)
  expect(toBoolean('true')).toBe(true)
  expect(toBoolean('TRUE')).toBe(true)
  expect(toBoolean(1)).toBe(true)
  expect(toBoolean(new Date())).toBe(true)
})
