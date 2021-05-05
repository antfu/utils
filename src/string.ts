/**
 * Replace backslash to slash
 *
 * @category String
 */
export function slash(str: string) {
  return str.replace(/\\/g, '/')
}

/**
 * Ensure prefix of a string
 *
 * @category String
 */
export function ensurePrefix(prefix: string, str: string) {
  if (!str.startsWith(prefix))
    return prefix + str
  return str
}
