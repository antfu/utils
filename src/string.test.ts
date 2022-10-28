import { expect, it } from 'vitest'
import { ensurePrefix, ensureSuffix, slash, template } from './string'

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

it('slash', () => {
  expect(slash('\\123')).toEqual('/123')
  expect(slash('\\\\')).toEqual('//')
  expect(slash('\\\h\\\i')).toEqual('/h/i')
})

it('ensurePrefix', () => {
  expect(ensurePrefix('abc', 'abcdef')).toEqual('abcdef')
  expect(ensurePrefix('hi ', 'jack')).toEqual('hi jack')
})

it('ensureSuffix', () => {
  expect(ensureSuffix('world', 'hello ')).toEqual('hello world')
  expect(ensureSuffix('123', 'abc123')).toEqual('abc123')
})
