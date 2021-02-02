module.exports = {
  testMatch: ['**/src/tests/**/*.test.ts'],
  coveragePathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/lib/index.js'],
}
