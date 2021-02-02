module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    'airbnb-base',
  ],
  "plugins": ["jest"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'windows'],
    'max-len': ['error', { 'ignoreComments': true }],
  },
};
