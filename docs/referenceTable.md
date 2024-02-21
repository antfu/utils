# Function Reference Table

List of currently avaliable functions.


| Name                    | Category                     | Description                                                                        |
|-------------------------|------------------------------|------------------------------------------------------------------------------------|
| toArray                 | [Array](/src/array.ts)       | Convert `Arrayable<T>` to `Array<T>`                                               |
| flattenArrayable        | [Array](/src/array.ts)       | Convert Arrayable<T> to `Array<T>` and flatten it                                  |
| mergeArrayable          | [Array](/src/array.ts)       | Use rest arguments to merge arrays                                                 |
| partition               | [Array](/src/array.ts)       | Divide an array into two parts by a filter function                                |
| uniq                    | [Array](/src/array.ts)       | Unique an Array                                                                    |
| uniqueBy                | [Array](/src/array.ts)       | Unique an Array by a custom equality function                                      |
| last                    | [Array](/src/array.ts)       | Get last item                                                                      |
| remove                  | [Array](/src/array.ts)       | Remove an item from Array                                                          |
| at                      | [Array](/src/array.ts)       | Get nth item of Array. Negative for backward                                       |
| range                   | [Array](/src/array.ts)       | Generate a range array of numbers. The stop is exclusive.                          |
| move                    | [Array](/src/array.ts)       | Move element in an Array                                                           |
| clampArrayRange         | [Array](/src/array.ts)       | Clamp a number to the index range of an array                                      |
| sample                  | [Array](/src/array.ts)       | Get random item(s) from an array                                                   |
| shuffle                 | [Array](/src/array.ts)       | Shuffle an array. This function mutates the array.                                 |
| assert                  | [Base](/src/base.ts)         | Asserts a condition                                                                |
| toString                | [Base](/src/base.ts)         | Returns a string representing the object's type.                                   |
| getTypeName             | [Base](/src/base.ts)         | Determines the type name of a given value                                          |
| noop                    | [Base](/src/base.ts)         | A no-operation function, does nothing.                                             |
| isDeepEqual             | [Equal](/src/equal.ts)       | Check deep equality of two values                                                  |
| batchInvoke             | [Function](/src/function.ts) | Call every function in an array                                                    |
| invoke                  | [Function](/src/function.ts) | Call the function                                                                  |
| tap                     | [Function](/src/function.ts) | Pass the value through the callback, and return the value                          |
| notNullish              | [Guards](/src/guards.ts)     | Type guard to filter out null-ish values                                           |
| noNull                  | [Guards](/src/guards.ts)     | Type guard to filter out null values                                               |
| notUndefined            | [Guards](/src/guards.ts)     | Type guard to filter out undefined values                                          |
| isTruthy                | [Guards](/src/guards.ts)     | Type guard to filter out falsy values                                              |
| isDef                   | [is](/src/is.ts)             | Checks if a value is defined (not undefined)                                       |
| isBoolean               | [is](/src/is.ts)             | Checks if a value is a boolean                                                     |
| isFunction              | [is](/src/is.ts)             | Checks if a value is a function                                                    |
| isNumber                | [is](/src/is.ts)             | Checks if a value is a number                                                      |
| isString                | [is](/src/is.ts)             | Checks if a value is a string                                                      |
| isObject                | [is](/src/is.ts)             | Checks if a value is an object                                                     |
| isUndefined             | [is](/src/is.ts)             | Checks if a value is undefined                                                     |
| isNull                  | [is](/src/is.ts)             | Checks if a value is null                                                          |
| isRegExp                | [is](/src/is.ts)             | Checks if a value is a RegExp                                                      |
| isDate                  | [is](/src/is.ts)             | Checks if a value is a Date                                                        |
| isWindow                | [is](/src/is.ts)             | Checks if a value is a window object (browser environments)                        |
| isBrowser               | [is](/src/is.ts)             | Checks if the current environment is a browser                                     |
| clamp                   | [Math](/src/math.ts)         | Clamps a number between a minimum and a maximum value                              |
| sum                     | [Math](/src/math.ts)         | Sums up all provided numbers                                                       |
| lerp                    | [Math](/src/math.ts)         | Linearly interpolates between two values                                           |
| remap                   | [Math](/src/math.ts)         | Remaps a number from one range to another                                          |
| objectMap               | [Object](/src/object.ts)     | Maps key/value pairs of an object and constructs a new one                         |
| isKeyOf                 | [Object](/src/object.ts)     | Type guard for any key, marking it as a key of T if it is in obj                   |
| objectKeys              | [Object](/src/object.ts)     | Strict typed Object.keys                                                           |
| objectEntries           | [Object](/src/object.ts)     | Strict typed Object.entries                                                        |
| deepMerge               | [Object](/src/object.ts)     | Deeply merges multiple objects into one                                            |
| deepMergeWithArray      | [Object](/src/object.ts)     | Deeply merges multiple objects into one, merging arrays instead of overriding them |
| isMergableObject        | [Object](/src/object.ts)     | Checks if a value is mergeable                                                     |
| objectPick              | [Object](/src/object.ts)     | Creates a new subset object by picking specified keys                              |
| clearUndefined          | [Object](/src/object.ts)     | Clears undefined fields from an object                                             |
| hasOwnProperty          | [Object](/src/object.ts)     | Checks if an object has a property with the specified name                         |
| createSingletonPromise  | [Promise](/src/promise.ts)   | Create singleton promise function                                                  |
| sleep                   | [Promise](/src/promise.ts)   | Promised `setTimeout`                                                              |
| createPromiseLock       | [Promise](/src/promise.ts)   | Create a promise lock                                                              |
| createControlledPromise | [Promise](/src/promise.ts)   | Return a Promise with `resolve` and `reject` methods                               |
| slash                   | [String](/src/string.ts)     | Replaces backslash with slash                                                      |
| ensurePrefix            | [String](/src/string.ts)     | Ensures a string starts with a specified prefix                                    |
| ensureSuffix            | [String](/src/string.ts)     | Ensures a string ends with a specified suffix                                      |
| template                | [String](/src/string.ts)     | Simple template engine                                                             |
| randomStr               | [String](/src/string.ts)     | Generates a random string                                                          |
| capitalize              | [String](/src/string.ts)     | Capitalizes the first letter of a string                                           |
| timestamp               | [Time](/src/time.ts)         | Returns the current timestamp                                                      |
