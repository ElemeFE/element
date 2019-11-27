module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [0, 'always', ['merge', 'theme']]
  }
};
