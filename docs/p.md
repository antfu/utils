# p

Utility for managing multiple promises.

## Without

```ts
const items = [1, 2, 3, 4, 5]

;(await Promise.all(items
  .map(async (i) => {
    const v = await multiply(i, 3)
    const even = await isEven(v)
    return [even, v]
  })))
  .filter(x => x[0])
  .map(x => x[1])
```

## With

```ts
import { p } from '@antfu/utils'

const items = [1, 2, 3, 4, 5]

await p(items)
  .map(async i => await multiply(i, 3))
  .filter(async i => await isEven(i))
// [6, 12]
```

```ts
import { p as P } from '@antfu/utils'

const p = P()

// collect promises that are not necessarily needed to be resolved right away
p.add(promiseTask1)

someOtherTasks()

p.add(promiseTask2)
p.add(promiseTask3)

// resolve all collected promises
await p
// => Promise.all([promiseTask1, promiseTask2, promiseTask3])
```

```ts
import { p } from '@antfu/utils'

// limits the number of concurrent tasks
await p(myTasks, { concurrency: 5 })
```
