import { Score } from '../../types'
import { MIN_NORMAL_PERCENT, MIN_PERFECT_PERCENT } from '../constants'

const checkScore = (value: number, score: Score): boolean => {
  if (score === 'perfect') {
    return value >= MIN_PERFECT_PERCENT
  }
  if (score === 'normal') {
    return value >= MIN_NORMAL_PERCENT
  }
  return false
}

export { checkScore }
