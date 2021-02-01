import { checkScore } from '../../matchers/utils'
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
