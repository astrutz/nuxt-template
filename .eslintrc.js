module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: ['@nuxtjs', 'eslint:recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warning' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warning' : 'off',
    semi: ['error', 'always']
  },
  globals: {
    $nuxt: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
