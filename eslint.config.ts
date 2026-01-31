import eslint from '@eslint/js'

import { defineConfig } from 'eslint/config'
import { configs } from 'typescript-eslint'

export default defineConfig([
  eslint.configs.recommended,
  ...configs.strictTypeChecked,
  ...configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],
        },
        {
          selector: 'function',
          format: ['camelCase'],
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
    },
  },
  {
    ignores: ['dist/', 'node_modules/', 'coverage/', 'jest.config.js'],
  },
])
