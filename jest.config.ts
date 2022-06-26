/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    extensionsToTreatAsEsm: [".test.js"],
    setupFiles: ["./src/helpers/helpers.js"]
  };