module.exports = {
  testEnvironment: require.resolve(`jest-environment-node`),
  transformIgnorePatterns: [`/.pnp.js$`],
  testTimeout: 50000,
};
