import { debounce as _debounce, throttle as _throttle } from 'throttle-debounce'

interface CancelOptions {
  upcomingOnly?: boolean
}

interface ReturnWithCancel<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): void
  cancel: (options?: CancelOptions) => void
}

export function throttle<T extends (...args: any[]) => any>(...args: any[]): ReturnWithCancel<T> {
  // @ts-expect-error
  return _throttle(...args)
}

export function debounce<T extends (...args: any[]) => any>(...args: any[]): ReturnWithCancel<T> {
  // @ts-expect-error
  return _debounce(...args)
}
