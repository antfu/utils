import { getTypeName } from './base'

export function isDeepEqual(value1: any, value2: any): boolean {
  const type1 = getTypeName(value1)
  const type2 = getTypeName(value2)
  if (type1 !== type2)
    return false

  if (type1 === 'array') {
    if (value1.length !== value2.length)
      return false

    return value1.every((item: any, i: number) => {
      return isDeepEqual(item, value2[i])
    })
  }
  if (type1 === 'object') {
    const keyArr = Object.keys(value1)
    if (keyArr.length !== Object.keys(value2).length)
      return false

    return keyArr.every((key: string) => {
      return isDeepEqual(value1[key], value2[key])
    })
  }
  return Object.is(value1, value2)
}
