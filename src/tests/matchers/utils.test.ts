import {
  checkScore,
  checkScoreValue,
  checkNumValue,
} from '../../matchers/utils'
import { NORMAL, PERFECT } from '../../constants'

describe('checkScore', () => {
  it('should return right result for PERFECT check', () => {
    expect(checkScore(95, PERFECT)).toBe(true)
    expect(checkScore(90, PERFECT)).toBe(true)
    expect(checkScore(85, PERFECT)).toBe(false)
  })

  it('should return right result for NORMAL check', () => {
    expect(checkScore(90, NORMAL)).toBe(true)
    expect(checkScore(50, NORMAL)).toBe(true)
    expect(checkScore(45, NORMAL)).toBe(false)
  })
})

describe('checkScoreValue', () => {
  it('should not throw an error for valid input', () => {
    expect(() => checkScoreValue(PERFECT)).not.toThrow()
  })

  it('should throw an error for invalid input', () => {
    expect(() => checkScoreValue('invalid')).toThrow()
  })
})

describe('checkNumValue', () => {
  it('should not throw an error for valid input', () => {
    expect(() => checkNumValue(75)).not.toThrow()
  })

  it('should throw an error for invalid input', () => {
    expect(() => checkNumValue(103)).toThrow()
  })
})
