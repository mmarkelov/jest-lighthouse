import lighthouse from 'lighthouse'
import { Report } from '../types'

const DEFAULT_LIGHTHOUSE_OPTIONS = {
  output: 'json',
  logLevel: 'info',
}

async function getLighthouseReport(
  url: string,
  port: number,
  options = {},
): Promise<Report> {
  return await lighthouse(url, {
    port,
    ...DEFAULT_LIGHTHOUSE_OPTIONS,
    ...options,
  })
}

function getLighthouseResult(lhr: Report, category: string): number {
  const properties = new Map()
    .set('accessibility', lhr.lhr.categories.accessibility.score * 100)
    .set('performance', lhr.lhr.categories.performance.score * 100)
    .set('pwa', lhr.lhr.categories.pwa.score * 100)
    .set('best-practices', lhr.lhr.categories['best-practices'].score * 100)
    .set('seo', lhr.lhr.categories.seo.score * 100)

  return properties.get(category)
}

export { getLighthouseReport, getLighthouseResult }
