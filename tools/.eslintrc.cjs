module.exports = {
  root: true,
  env: { node: true, es2020: true },
  extends: [
    'eslint:recommended',
  ],
  ignorePatterns: ['.eslintrc.cjs'],
  rules: {},
  parserOptions: {
    'sourceType': 'module',
    "ecmaVersion": 'latest'
  }
}
