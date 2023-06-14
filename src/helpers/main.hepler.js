/**
 * Function to determine whether the passed argument is a number
 * @param {*} value 
 * @returns {boolean}
 */
export function isNumber(value) {
  if (Number.isFinite(value)) {
    return true
  }
  return false
}
