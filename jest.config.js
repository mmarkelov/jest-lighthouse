module.exports = {
  testMatch: ['**/src/tests/**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/lib/index.js'],
}
