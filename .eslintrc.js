module.exports = {
  ecmaFeatures: {
    jsx: true
  },
  env: {
      commonjs: true,
      es6: true,
      node: true
  },
  extends: 'eslint:recommended',
  globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
  },
  rules: {
      'comma-dangle': [ 'warn', {
          arrays: 'always-multiline',
          objects: 'always-multiline',
      }],
      'semi': [ 'error', 'never' ],
  }
};
