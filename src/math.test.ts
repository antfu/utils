import { expect, it } from 'vitest'
import { lerp, remap, sum } from './math'

it('sum', () => {
  expect(sum(1, 2, 3)).toEqual(6)
  expect(sum([1, 2, 3])).toEqual(6)
  expect(sum([1], [2, 3])).toEqual(6)

  // @ts-expect-error
  expect(sum(1, 2, [1, 2, 3])).toEqual(9)
})

it('lerp', () => {
  expect(lerp(0, 2, 0)).toEqual(0)
  expect(lerp(0, 2, 1)).toEqual(2)
  expect(lerp(0, 2, 0.5)).toEqual(1)

  expect(lerp(-10, 10, 0.5)).toEqual(0)
  expect(lerp(10, -10, 0.5)).toEqual(0)

  expect(lerp(0, 1, -1.5)).toEqual(0)
  expect(lerp(0, 1, 2.5)).toEqual(1)
})

it('remap', () => {
  expect(remap(0, 0, 1, 0, 10)).toEqual(0)
  expect(remap(1, 0, 1, 0, 10)).toEqual(10)
  expect(remap(0.5, 0, 1, 0, 10)).toEqual(5)

  expect(remap(0.5, -1, 1, 0, 1)).toEqual(0.75)
  expect(remap(0.25, 0, 1, -1, 1)).toEqual(-0.5)

  expect(remap(2, 0, 1, 5, 10)).toEqual(10)
  expect(remap(-1, 0, 1, 5, 10)).toEqual(5)
})
