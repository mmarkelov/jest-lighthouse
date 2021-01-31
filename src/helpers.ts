import lighthouse from 'lighthouse'

const DEFAULT_LIGHTHOUSE_OPTIONS = {
  output: 'json',
  logLevel: 'info',
}

async function getLighthouseReport(url: string, port: number, options = {}) {
  return await lighthouse(url, {
    port,
    ...DEFAULT_LIGHTHOUSE_OPTIONS,
    ...options,
  })
}

export { getLighthouseReport }
