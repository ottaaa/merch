module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  extends: [
    '../.eslintrc.js',
  ],
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
          'builtin', // 組み込みモジュール
          'external', // npmでインストールした外部ライブラリ
          'internal', // 自作モジュール
          ['parent', 'sibling'],
          'object',
          'type',
          'index',
        ],
        alphabetize: {
          order: 'asc', // 昇順にソート
        },
        'newlines-between': 'always',
      },
    ],
    'import/no-duplicates': 'error',
    'unused-imports/no-unused-imports': 'error',
  },
};
