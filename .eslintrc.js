module.exports = {
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'unused-imports'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'always'],
    'comma-dangle': ['warn', 'always-multiline'],
    'comma-spacing': ['warn', { 'after': true }],
    'key-spacing': ['warn'],
    'array-bracket-spacing': ['warn', 'always'],
    'object-curly-spacing': ['warn', 'always'],
    'indent': [
      'warn',
      2,
      { MemberExpression: 'off' }
    ],
    'no-console': [
      'warn',
      { allow: ['info', 'error', 'warn', 'debug', 'verbose'] },
    ],
  },
};
