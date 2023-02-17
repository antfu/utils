import { describe, expect, it } from 'vitest'
import { dayDiff } from './date'

describe('date', () => {
  it('dayDiff', () => {
    const num = dayDiff('2020-01-01', '2020-01-02')
    expect(num).toBe(1)

    const num2 = dayDiff(new Date('2020-01-01'), new Date('2020-01-03'))
    expect(num2).toBe(2)
  })
})

