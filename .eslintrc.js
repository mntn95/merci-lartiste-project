module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // ===================================
    // RÈGLES GÉNÉRALES
    // ===================================
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'no-alert': 'warn',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'no-unused-vars': 'off', // Disabled in favor of @typescript-eslint rule

    // ===================================
    // RÈGLES TYPESCRIPT
    // ===================================
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',

    // ===================================
    // RÈGLES REACT
    // ===================================
    'react/react-in-jsx-scope': 'off', // Not needed with React 18
    'react/prop-types': 'off', // Using TypeScript
    'react/jsx-uses-react': 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-key': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // ===================================
    // RÈGLES IMPORT
    // ===================================
    'import/no-anonymous-default-export': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // ===================================
    // CODE STYLE (complémentaire à Prettier)
    // ===================================
    'prefer-template': 'error',
    'object-shorthand': 'error',
    'no-useless-concat': 'error',
  },
  overrides: [
    {
      // Test files
      files: ['**/__tests__/**/*', '**/*.test.*', '**/*.spec.*'],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
};


