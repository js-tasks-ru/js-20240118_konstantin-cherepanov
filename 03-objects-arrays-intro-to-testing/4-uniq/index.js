/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  const uniqueValues = [];
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (uniqueValues.indexOf(value) === -1) {
      uniqueValues.push(value);
    }
  }
  return uniqueValues;
}
