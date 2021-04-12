import { objectMap } from './object'

it('objectMap', () => {
  expect(objectMap({}, (...args) => args)).toEqual({})

  expect(
    objectMap(
      { a: 1, b: 2 },
      (k, v) => [k.toString().toUpperCase(), v.toString()],
    ),
  ).toEqual({ A: '1', B: '2' })

  expect(
    objectMap(
      { a: 1, b: 2 },
      () => undefined,
    ),
  ).toEqual({})

  expect(
    objectMap(
      { a: 1, b: 2 },
      (k, v) => k === 'a' ? undefined : [k, v],
    ),
  ).toEqual({ b: 2 })

  expect(
    objectMap(
      { a: 1, b: 2 },
      (k, v) => [v, k],
    ),
  ).toEqual({ 1: 'a', 2: 'b' })
})
