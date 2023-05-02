import type { Config } from 'jest';

const config: Config = {
    verbose: true,
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: [
        '**/__tests__/**/*.test.ts',
    ]
};

export default config;