// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parserOptions: {
    ecmaVersion: 'es2024',
  },
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
  overrides: [
    {
      files: ['*.ts', '*.cts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    {
      files: ['*.test.*', '*.spec.*'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style', 'plugin:jest/all'],
      rules: {
        'jest/no-hooks': 'off',
        'jest/prefer-spy-on': 'off',
        'jest/expect-expect': 'off',
        'jest/prefer-expect-assertions': 1,
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            vars: 'local',
            args: 'after-used',
            ignoreRestSiblings: true,
          },
        ],
      },
    },
  ],
};
