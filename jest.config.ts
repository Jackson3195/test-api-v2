import type { Config } from '@jest/types';
const tsConfig = require('./tsconfig.json');
const moduleNameMapper = require("tsconfig-paths-jest")(tsConfig)

const config: Config.InitialOptions = {
  preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}'
    ],
    coveragePathIgnorePatterns: [
      '/node_modules/'
    ],
    coverageReporters: [
      'html',
      'lcov',
      'text-summary'
    ],
    coverageDirectory: '../coverage',
    rootDir: '.',
    bail: 1,
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    },
    moduleNameMapper,
    modulePathIgnorePatterns: ['<rootDir>/dist']
};

export default config;