import type { Config } from 'jest';

const config: Config = {
  extensionsToTreatAsEsm: ['.ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/init/'],
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'html', ['cobertura', { file: 'cobertura.cdk.xml' }]],
  coveragePathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['src/**/*.{cts,ts,tsx}', '!**/node_modules/**'],
  moduleFileExtensions: ['cts', 'ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.c?tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        useESM: true,
        isolatedModules: false,
      },
    ],
  },
  moduleNameMapper: {
    '^@src(?:/(.*)|$)': '<rootDir>/src/$1',
  },
};

export default config;
