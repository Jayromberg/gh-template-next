const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.ts(x)?',
    'src/screens/**/*.ts(x)?',
    'src/theme/**/*.ts(x)?',
  ],
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
};

module.exports = createJestConfig(customJestConfig);
