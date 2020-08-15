module.exports = {
  ...require('@corex/jest/reporter'),
  preset: 'ts-jest',
  verbose: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  testPathIgnorePatterns: ['dist', 'node_modules'],
}
