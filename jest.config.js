module.exports = {
  displayName: 'Pamoja-tech-APIs',
  verbose: true,
  testMatch: ['**/?(*.)+(spec|test).js'],
  collectCoverage: true,
  clearMocks: true,
  collectCoverageFrom: [
    'api/**/*.js',
    '!**api/v1/helpers/**',
    '!**api/v1/utils/**',
    '!**api/v1/middleware/**',
    '!**/node_modules/**',
    '!**/jest.config.js'
  ]
};
