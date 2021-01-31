interface Audit {
  id: string
  title: string
  description: string
  score: number
  scoreDisplayMode: string
  numericValue: number
  numericUnit: string
  displayValue: string
  explanation?: any
  errorMessage?: string
  warnings?: any
  details?: any
}

interface Category {
  title: string
  description: string
  manualDescription?: string
  auditRefs: any[]
  id: string
  score: number
}

export interface Report {
  lhr: {
    userAgent: string
    lighthouseVersion: string
    finalUrl: string
    audits: {
      'service-worker': Audit
      'color-contrast': Audit
      viewport: Audit
      'first-contentful-paint': Audit
      'largest-contentful-paint': Audit
    }
    categories: {
      performance: Category
      accessibility: Category
      'best-practices': Category
      seo: Category
      pwa: Category
    }
  }
}

export type Score = 'perfect' | 'normal' | 'bad'
