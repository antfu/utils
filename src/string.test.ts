import { expect, it } from 'vitest'
import { capitalize, ensurePrefix, ensureSuffix, slash, template, unindent } from './string'

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
      // @ts-expect-error disallow non-literal on type
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

it('namedTemplate', () => {
  expect(
    template(
      '{greet}! My name is {name}.',
      { greet: 'Hello', name: 'Anthony' },
    ),
  ).toEqual('Hello! My name is Anthony.')

  expect(
    template(
      '{a} + {b} = {result}',
      { a: 1, b: 2, result: 3 },
    ),
  ).toEqual('1 + 2 = 3')

  expect(
    template(
      '{1} + {b} = 3',
      { 1: 'a', b: 2 },
    ),
  ).toEqual('a + 2 = 3')

  // Without fallback return the variable name
  expect(
    template(
      '{10}',
      {},
    ),
  ).toEqual('10')

  expect(
    template(
      '{11}',
      null,
    ),
  ).toEqual('undefined')

  expect(
    template(
      '{11}',
      undefined,
    ),
  ).toEqual('undefined')

  expect(
    template(
      '{10}',
      {},
      'unknown',
    ),
  ).toEqual('unknown')

  expect(
    template(
      '{1} {2} {3} {4}',
      { 4: 'known key' },
      k => String(+k * 2),
    ),
  ).toEqual('2 4 6 known key')
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

it('capitalize', () => {
  expect(capitalize('hello World')).toEqual('Hello world')
  expect(capitalize('123')).toEqual('123')
  expect(capitalize('中国')).toEqual('中国')
  expect(capitalize('āÁĂÀ')).toEqual('Āáăà')
  expect(capitalize('\a')).toEqual('A')
})

it('unindent', () => {
  expect(
    unindent`
      if (a) {
        b()
      }
    `,
  ).toMatchSnapshot('base')

  expect(
    unindent`
          if (a) {
        b()
      }
    `,
  ).toMatchSnapshot('with leading indent')

  expect(
    unindent`

          if (a) {
        b()
      }

    `,
  ).toMatchSnapshot('multi-start and end')

  expect(
    unindent`if (a) {
  b()
}`,
  ).toMatchSnapshot('no start or end')

  expect(
    unindent`
                  if (a) {
                  b()
              }
    `,
  ).toMatchSnapshot('indent deep')
})
