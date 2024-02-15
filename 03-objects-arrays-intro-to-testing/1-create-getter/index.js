/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const parts = path.split(".");
  return function (obj) {
    for (let i = 0; i < parts.length; i++) {
      obj = obj[parts[i]];
      if (obj === undefined) {
        return undefined;
      }
    }
    return obj;
  };
}