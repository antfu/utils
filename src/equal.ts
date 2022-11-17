import { getType } from './base'

export const isTypeEqual = (value1: any, value2: any) => {
    return getType(value1) === getType(value2);
}

export const isDeepEqual = (value1: any, value2: any): boolean => {
    const type1 = getType(value1);
    const type2 = getType(value2);
    if (type1 !== type2) {
      return false;
    }
    if (type1 === 'array') {
      if (value1.length !== value2.length) {
        return false;
      }
      return value1.every((item: any, i: number) => {
        return isDeepEqual(item, value2[i]);
      });
    }
    if (type1 === 'object') {
      const keyArr = Object.keys(value1);
      if (keyArr.length !== Object.keys(value2).length) {
        return false;
      }
      return keyArr.every((key: string) => {
        return isDeepEqual(value1[key], value2[key]);
      });
    }
    return value1 === value2;
}