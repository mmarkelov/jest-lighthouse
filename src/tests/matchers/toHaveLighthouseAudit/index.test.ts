import toHaveLighthouseAudit from '../../../matchers/toHaveLighthouseAudit'
import { Report } from '../../../../types'
import { NORMAL, PERFECT } from '../../../constants'

describe('toHaveLighthouseAudit', () => {
  const mockLhr = {
    lhr: {
      categories: {
        accessibility: {
          score: 0.9,
        },
        'best-practices': {
          score: 0.95,
        },
        performance: {
          score: 0.8,
        },
        pwa: {
          score: 0.45,
        },
        seo: {
          score: 0.7,
        },
      },
    },
  }

  describe('Passed tests', () => {
    it('number input value', () => {
      const { pass } = toHaveLighthouseAudit(
        mockLhr as Report,
        'performance',
        70,
      )
      expect(pass).toBe(true)
    })

    it('score input value', () => {
      const { pass } = toHaveLighthouseAudit(
        mockLhr as Report,
        'accessibility',
        PERFECT,
      )
      expect(pass).toBe(true)
    })

    it('without input', () => {
      const { pass } = toHaveLighthouseAudit(
        mockLhr as Report,
        'best-practices',
      )
      expect(pass).toBe(true)
    })
  })

  describe('Failed tests', () => {
    it('number input value', () => {
      const { pass } = toHaveLighthouseAudit(mockLhr as Report, 'seo', 80)
      expect(pass).toBe(false)
    })

    it('score input value', () => {
      const { pass } = toHaveLighthouseAudit(mockLhr as Report, 'pwa', NORMAL)
      expect(pass).toBe(false)
    })

    it('without input', () => {
      const { pass } = toHaveLighthouseAudit(mockLhr as Report, 'performance')
      expect(pass).toBe(false)
    })
  })
})
