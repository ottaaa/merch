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
    es6: true,
    es2022: true,
  },
  ignorePatterns: ['.eslintrc.js', 'dist'],
  rules: {
    'object-shorthand': 'warn',
    'no-useless-constructor': 'off',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index', 'object'], 'type'],
        pathGroups: [
          {
            pattern: '{#,.*}/**/*.interface',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{#,.*}/**/*.model',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{#,.*}/**/*.dto',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{#,.*}/**/*.module',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{#,.*}/**/*.repository',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{#,.*}/**/*.service',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{#,.*}/**/*.controller',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{@prisma/**,*prisma*}',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: '{@nestjs/**,nestjs*}',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
        warnOnUnassignedImports: true,
      },
    ],
    'import/no-duplicates': 'error',
    'unused-imports/no-unused-imports': 'warn',
  },
};
