import { getLighthouseReport, getLighthouseResult } from './helpers'
import matchers from './matchers'

// @ts-ignore
if (typeof global.expect !== 'undefined') {
  // @ts-ignore
  global.expect.extend(matchers)
}

export { getLighthouseReport, getLighthouseResult }
