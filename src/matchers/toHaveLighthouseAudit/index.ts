import { Report, Score } from '../../../types'
import { getLighthouseResult } from '../../helpers'
import { checkScore } from '../utils'

const toHaveLighthouseAudit = (
  lhr: Report,
  category: keyof Report['lhr']['categories'],
  value?: number | Score,
) => {
  // TODO add checkers
  const percentage = getLighthouseResult(lhr, category)
  if (typeof value === 'number') {
    if (percentage >= value) {
      return {
        pass: true,
        message: () =>
          `Successfully passed ${category} with ${percentage} result`,
      }
    }
    return {
      pass: false,
      message: () => `Failed ${category} with ${percentage} result`,
    }
  }
  if (typeof value === 'string') {
    if (checkScore(percentage, value)) {
      return {
        pass: true,
        message: () =>
          `Successfully passed ${category} with ${percentage} result`,
      }
    }
    return {
      pass: false,
      message: () => `Failed ${category} with ${percentage} result`,
    }
  }
}

export default toHaveLighthouseAudit
