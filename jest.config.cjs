// took this solution from medium and hence this is how jest is getting the information of testEnvironment, transforming jsx to babel-jest,
// and setup files is coming from setupTests.js
module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy', // Mock CSS imports
  },
};
