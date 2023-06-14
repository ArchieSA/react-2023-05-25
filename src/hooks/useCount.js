import { useState } from 'react'
import { isNumber } from '@/helpers/main.hepler'

const DEFAULT_MIN_VALUE = 0
const DEFAULT_MAX_VALUE = 5

/**
 * @param {Object} Params useCount hook's params
 * @param {number} Params.initialVaue initial value
 * @param {number} [Params.minValue = 0] minimum possible value 
 * @param {number} [Params.maxValue = 5] maximum possible value
 * @returns {[number, (stepValue: number) => void]} [current value, function of changing value]
 */
export function useCount({ initialVaue = 0, minValue = DEFAULT_MIN_VALUE, maxValue = DEFAULT_MAX_VALUE }) {
  const [value, setValue] = useState(initialVaue)

  if (!isNumber(initialVaue) || !isNumber(minValue) || !isNumber(maxValue)) {
    console.log('Один из параметров хука useCount не является числом')
    return null
  }

  /**
   * @param {number} stepValue 
   * @returns {void}
   */
  const change = stepValue => {
    if (!isNumber(stepValue)) {
      return
    }

    if (
      (stepValue > 0 && (value + stepValue) <= maxValue)
      || ( stepValue < 0 && (value + stepValue) >= minValue )
    ) {
      setValue(value + stepValue)
    }
  }

  return [value, change]
}
