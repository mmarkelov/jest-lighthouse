import { Report, Score } from '../../../types'
import { getLighthouseResult } from '../../helpers'
import { checkNumValue, checkScore, checkScoreValue } from '../utils'
import { PERFECT } from '../../constants'

const getMessage = (
  category: keyof Report['lhr']['categories'],
  percentage: number,
  failed = false,
): (() => string) => {
  return failed
    ? () => `Failed ${category} with ${percentage} percent result`
    : () => `Successfully passed ${category} with ${percentage} percent result`
}

const getResult = (
  category: keyof Report['lhr']['categories'],
  percentage: number,
  failed = false,
) => ({
  pass: !failed,
  message: getMessage(category, percentage, failed),
})

const toHaveLighthouseAudit = (
  lhr: Report,
  category: keyof Report['lhr']['categories'],
  value?: number | Score,
) => {
  const percentage = getLighthouseResult(lhr, category)
  if (typeof value === 'number') {
    checkNumValue(value)
    return getResult(category, percentage, percentage < value)
  }
  if (typeof value === 'string') {
    checkScoreValue(value)
    return getResult(category, percentage, !checkScore(percentage, value))
  }
  return getResult(category, percentage, !checkScore(percentage, PERFECT))
}

export default toHaveLighthouseAudit
