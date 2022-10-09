module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: '2021',
  },

  env: {
    node: true,
    browser: true,
    'vue/setup-compiler-macros': true
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base'
  ],

  plugins: [
    'vue',
  ],

  globals: {
    ga: 'readonly',
    cordova: 'readonly',
    __statics: 'readonly',
    __QUASAR_SSR__: 'readonly',
    __QUASAR_SSR_SERVER__: 'readonly',
    __QUASAR_SSR_CLIENT__: 'readonly',
    __QUASAR_SSR_PWA__: 'readonly',
    process: 'readonly',
    Capacitor: 'readonly',
    chrome: 'readonly'
  },

  rules: {
    'no-param-reassign': 'off',
    'no-void': 'off',
    'no-nested-ternary': 'off',
    'max-classes-per-file': 'off',

    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    'prefer-promise-reject-errors': 'off',

    'func-names': 'off',
    'no-return-assign': 'off',
    'consistent-return': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',

    'no-console': process.env.NODE_ENV === 'production' && !process.env.DEBUGGING ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}
