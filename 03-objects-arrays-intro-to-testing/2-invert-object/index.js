/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
  // if (!obj || !Object.keys(obj).length) {
    // return obj;
  // }
  if (!obj) { return } else {
    return Object.entries(obj).reduce((previous, [currentKey, currentValue]) => ({
      ...previous,
      [currentValue]: currentKey
    }), {});
  }
}
