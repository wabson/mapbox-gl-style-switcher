module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single', {avoidEscape: true, allowTemplateLiterals: true}]
  },
  overrides: [
    {
      files: ['**/*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'eslint:recommended'
      ],
      rules: {
        semi: ['error', 'always'],
        quotes: ['error', 'single', {avoidEscape: true, allowTemplateLiterals: true}],
        'no-undef': 'off'
      }
    }
  ]
};
