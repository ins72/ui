// ESLint configuration for style consistency enforcement
// Based on MEWAYZ Frontend Development Rules & Style Consistency Guidelines

module.exports = {
  extends: [
    'next/core-web-vitals',
    '@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // Enforce component naming conventions
    'react/display-name': 'error',
    
    // Enforce import order - style-reference imports should come first
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '@/components/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/templates/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/mocks/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // Enforce TypeScript usage
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

    // Enforce consistent component patterns
    'react/prop-types': 'off', // Using TypeScript
    'react/react-in-jsx-scope': 'off', // Next.js handles this
    'react/no-unescaped-entities': 'off',

    // Enforce consistent file naming
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
        ignore: [
          'page.tsx',
          'layout.tsx',
          'loading.tsx',
          'error.tsx',
          'not-found.tsx',
          'globals.css',
        ],
      },
    ],

    // Prevent inline styles (enforce CSS classes)
    'react/forbid-dom-props': [
      'error',
      {
        forbid: [
          {
            propName: 'style',
            message: 'Use CSS classes from style-reference instead of inline styles',
          },
        ],
      },
    ],

    // Encourage proper accessibility
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
  },
  
  // Custom rules for style-reference enforcement
  overrides: [
    {
      files: ['frontend/app/**/*.tsx', 'frontend/components/**/*.tsx', 'frontend/templates/**/*.tsx'],
      rules: {
        // Warn when not importing from style-reference components
        'no-restricted-imports': [
          'warn',
          {
            patterns: [
              {
                group: ['!@/components/**', '!@/templates/**'],
                message: 'Consider using components from @/components or @/templates first for consistency',
              },
            ],
          },
        ],
      },
    },
    {
      files: ['frontend/app/**/page.tsx'],
      rules: {
        // Enforce Layout wrapper for all pages
        'react-hooks/rules-of-hooks': 'error',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
      },
    },
  ],
  
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
}; 