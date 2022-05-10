import { describe, expect, it } from 'vitest'
import { p as P } from './p'

const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

describe('should', () => {
  it('p', async () => {
    const p = P()
    let dummy = 0
    p.add((async () => {
      await timeout(100)
      dummy += 1
      return 4
    })())
    expect(dummy).toBe(0)
    await p
    expect(dummy).toBe(1)
  })

  it('chain array map', async () => {
    expect(
      await P([1, 2, 3, 4, 5])
        .map(async (i) => {
          await timeout(10)
          return i * i
        })
        .filter(i => i > 10)
        .reduce((a, b) => a + b, 0),
    )
      .toEqual(41)
  })

  it('concurrency: 1', async () => {
    let running = 0

    const promises = Array.from({ length: 100 }, async (_, i: number) => {
      running++
      expect(running).to.be.lessThanOrEqual(1)
      running--
      return i
    })

    const results = await P(promises, { concurrency: 1 }).reduce((a, b) => a + b, 0)
    expect(results).to.be.equal(4950)
  })

  it('concurrency: 4', async () => {
    let running = 0

    const promises = Array.from({ length: 100 }, async () => {
      running++
      expect(running).to.be.lessThanOrEqual(4)
      running--
    })

    await P(promises, { concurrency: 4 })
  })

  it('fails with wrong format', async () => {
    try {
      await P([], { concurrency: 1.5 })
    }
    catch (e) {
      expect(e).toBeInstanceOf(TypeError)
    }

    try {
      await P([], { concurrency: 0 })
    }
    catch (e) {
      expect(e).toBeInstanceOf(TypeError)
    }
  })
})
