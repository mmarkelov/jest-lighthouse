import { Score } from '../../types'
import {
  MIN_NORMAL_PERCENT,
  MIN_PERFECT_PERCENT,
  NORMAL,
  PERFECT,
} from '../constants'

const formatError = (error: string): string => `jest-lighthouse: ${error}`

class JestLighthouseError extends Error {
  constructor(message: string) {
    super(formatError(message))
    this.name = 'JestLighthouseError'
  }
}

const checkScore = (value: number, score: Score): boolean => {
  if (score === PERFECT) {
    return value >= MIN_PERFECT_PERCENT
  }
  if (score === NORMAL) {
    return value >= MIN_NORMAL_PERCENT
  }
  return false
}

const checkNumValue = (value: number) => {
  if (value < 0 || value > 100) {
    throw new JestLighthouseError(
      'Wrong percent value. Should be in range between 0 and 100',
    )
  }
}

const checkScoreValue = (value: string) => {
  if (value !== PERFECT && value !== NORMAL) {
    throw new JestLighthouseError(
      `Wrong input value. Should be ${PERFECT} or ${NORMAL}`,
    )
  }
}

export { checkScore, checkNumValue, checkScoreValue }
