import { expect, it } from 'vitest'
import { sum } from './math'

it('sum', () => {
  expect(sum(1, 2, 3)).toEqual(6)
  expect(sum([1, 2, 3])).toEqual(6)
  expect(sum([1], [2, 3])).toEqual(6)

  // @ts-expect-error
  expect(sum(1, 2, [1, 2, 3])).toEqual(9)
})
