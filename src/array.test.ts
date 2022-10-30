import { describe, expect, it } from 'vitest'
import { flattenArrayable, partition, range, toArray } from './array'

describe('toArray', () => {
  it.each([
    [undefined, []],
    [null, []],
    [false, [false]],
    [0, [0]],
    ['', ['']],
    [[], []],
    ['foo', ['foo']],
    [['foo'], ['foo']],
  ])('%s => %s', (input, expected) => {
    expect(toArray(input)).toEqual(expected)
  })
})

it('flattenArrayable', () => {
  expect(flattenArrayable()).toEqual([])
  expect(flattenArrayable([])).toEqual([])
  expect(flattenArrayable(1)).toEqual([1])
  expect(flattenArrayable([1, '2', 3])).toEqual([1, '2', 3])
  expect(flattenArrayable([1, [1, 2]])).toEqual([1, 1, 2])
  expect(flattenArrayable([1, [1, [2]]])).toEqual([1, 1, [2]])
})

it('range', () => {
  expect(range(0)).toEqual([])
  expect(range(2)).toEqual([0, 1])
  expect(range(2, 5)).toEqual([2, 3, 4])
  expect(range(2, 10, 2)).toEqual([2, 4, 6, 8])
})

it('partition', () => {
  const data = range(10)

  expect(
    partition(data, i => i % 2),
  ).toEqual([
    [1, 3, 5, 7, 9],
    [0, 2, 4, 6, 8],
  ])

  expect(
    partition(
      data,
      i => i % 3 === 0,
      i => i % 2 === 0,
    ),
  ).toEqual([
    [0, 3, 6, 9],
    [2, 4, 8],
    [1, 5, 7],
  ])

  expect(
    partition(
      data,
      i => i,
    ),
  ).toHaveLength(2)

  expect(
    partition(
      data,
      i => i,
      i => i,
      i => i,
      i => i,
      i => i,
    ),
  ).toHaveLength(6)
})
