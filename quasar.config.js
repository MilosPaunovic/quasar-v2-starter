const { configure } = require('quasar/wrappers');
const { version } = require('./package.json');
const PARSER = require('./variables/parser')();

module.exports = configure(() => ({
  eslint: {
    warnings: true,
    errors: true,
    fix: true,
  },

  htmlVariables: {
    version,
  },

  boot: [
    'guards',
    'components',
    'notifications',
    'axios',
    'sentry',
  ],

  css: [
    'app.scss',
  ],

  extras: [
    'roboto-font',
    'material-icons',
  ],

  build: {
    target: {
      browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
      node: 'node16',
    },
    env: PARSER,
    analyze: PARSER.ENVIRONMENT === 'local',
    sourcemap: PARSER.ENVIRONMENT !== 'production',
    vueRouterMode: 'history',
    devQuasarTreeshaking: true,
  },

  devServer: {
    open: true,
    port: 7200,
    vueDevtools: true,
  },

  framework: {
    cssAddon: true,
  },

  ssr: {
    pwa: false,
    prodPort: 3000,
    middlewares: [
      'render',
    ],
  },

  pwa: {
    workboxMode: 'generateSW',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
    injectPwaMetaTags: true,
    swFilename: 'sw.js',
    manifestFilename: 'manifest.json',
    useCredentialsForManifestTag: false,
  },

  capacitor: {
    hideSplashscreen: true,
  },

  electron: {
    inspectPort: 5858,
    bundler: 'packager',
    packager: {},
    builder: {
      appId: 'quasar-project',
    },
  },

  bex: {
    contentScripts: [
      'my-content-script',
    ],
  },
}));
