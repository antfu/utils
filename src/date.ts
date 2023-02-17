/**
 * Return the number of days between two dates.
 *
 * The function takes two parameters, earlier and later, which are both Date objects or strings that can be converted to
 * Date objects
 * @param {Date | string} earlier - The earlier date.
 * @param {Date | string} later - The date you want to compare to.
 * @returns The number of days between two dates.
 */
export function dayDiff(earlier: Date | string, later: Date | string) {
  return Math.ceil(
    Math.abs(new Date(earlier).getTime() - new Date(later).getTime())
        / (1000 * 60 * 60 * 24),
  )
}
