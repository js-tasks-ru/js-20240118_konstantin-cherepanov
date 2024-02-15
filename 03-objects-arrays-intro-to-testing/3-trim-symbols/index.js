/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (string === '' || size <= 0) return '';
  if (string.length && !size) return string;

  const stringArrow = string.split('');
  let stringSize = 0;
  let totalString = '';

  stringArrow.forEach((letter, i) => {
    if (i === 0) {
      totalString += letter;
      if (stringArrow[i + 1] === letter) {
        stringSize += 1;
      }
    } else if (i > 0) {
      if (stringArrow[i - 1] === letter && stringSize < size) {
        totalString += letter;
        stringSize += 1;
      } else if (stringArrow[i - 1] !== letter) {
        totalString += letter;
        stringSize = 1;
      }
    }
  })

  return totalString;
}
