const prettierOptions = require('./.prettierrc.js');
const extensions = ['.tsx', '.jsx', '.ts', '.js', '.json'];

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      classes: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
  },
  settings: {
    'import/resolver': {
      alias: {
        extensions,
        map: [['@', 'src']],
      },
    },
  },
  env: {
    es2021: true,
    browser: true,
  },
  rules: {
    'prettier/prettier': ['warn', prettierOptions],
    'max-len': ['warn', { code: 120 }],

    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],

    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',

    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['./*', '../*'],
            message: 'USE ALIAS!!!',
          },
        ],
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',

        alphabetize: {
          order: 'desc',
          caseInsensitive: false,
        },

        groups: [
          'external',
          ['internal'],
          ['parent', 'builtin'],
          'type',
          'sibling',
          'object',
          'index',
        ],

        pathGroups: [
          {
            pattern: '@/icons/**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '@/images/**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '@/pages/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/resources/**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '@/utils/**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '@/hooks/**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '@/effects/**',
            group: 'sibling',
            position: 'before',
          },
          {
            pattern: '@/components/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/containers/**',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
  },
  globals: {
    module: 'readonly',
    process: 'readonly',
    require: 'readonly',
  },
};
