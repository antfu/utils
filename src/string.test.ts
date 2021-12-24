import { expect, it } from 'vitest'
import { template } from './string'

it('template', () => {
  expect(
    template(
      'Hello {0}! My name is {1}.',
      'Inès',
      'Anthony',
    ),
  ).toEqual('Hello Inès! My name is Anthony.')

  expect(
    template(
      '{0} + {1} = {2}{3}',
      1,
      '1',
      { v: 2 },
      [2, 3],
    ),
  ).toEqual('1 + 1 = [object Object]2,3')

  expect(
    template(
      '{10}',
    ),
  ).toEqual('undefined')

  expect(
    template(
      'Hi',
      '',
    ),
  ).toEqual('Hi')
})
