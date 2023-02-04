module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  extends: ['../.eslintrc.js'],
  root: true,
  env: {
    node: true,
    jest: true,
    es2022: true,
  },
  ignorePatterns: ['.eslintrc.js', 'dist'],
  rules: {
    'no-restricted-imports': ['error', { patterns: ['./', '../'] }],
    'no-useless-constructor': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index', 'object'],
          'type',
        ],
        pathGroups: [
          {
            pattern: '#/**/*dto',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '#/**/*module',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '#/**/*service',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '#/**/*controller',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '@nestjs/**',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['nestjs'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    'import/no-duplicates': 'error',
    'unused-imports/no-unused-imports': 'error',
  },
};
