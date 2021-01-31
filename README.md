# jest-lighthouse

Helper functions to simplify [Jest](https://github.com/facebook/jest) integration with [Lighthouse](https://github.com/GoogleChrome/lighthouse)

```bash
npm install -D jest-lighthouse
```

## Using with [jest-playwright](https://github.com/playwright-community/jest-playwright)

```js
// jest-playwright.config.js
module.exports = {
  ...
  launchType: 'LAUNCH',
  launchOptions: {
    args: ['--remote-debugging-port=9222'],
    headless: true,
  },
}

// test file
const { getLighthouseReport } = require("jest-lighthouse");

...

describe('Lighthouse', () => {
  let lhr;
  beforeAll(async () => {
    const port = 9222; // same port as defined in launchOptions
    lhr = await getLighthouseReport(url, port);
  });
})

...
```

## Using with [jest-puppeteer](https://github.com/smooth-code/jest-puppeteer)

```js
// test file
const { getLighthouseReport } = require("jest-lighthouse");

...

describe('Lighthouse', () => {
  jest.setTimeout(15000);
  let lhr;
  beforeAll(async () => {
    const port = new URL(browser.wsEndpoint()).port;
    lhr = await getLighthouseReport(url, port);
  });
})

...
```
