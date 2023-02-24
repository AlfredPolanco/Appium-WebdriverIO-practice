exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'alfredopolanco_VcR1Xo',
    key: process.env.BROWSERSTACK_ACCESS_KEY || '6FFCeWipiqn5sKng1ivf',

    updateJob: false,
    specs: [
      '../test/specs/**/*.js'
    ],
    exclude: [],

    capabilities: [{
      project: "JD Store App",
      build: 'Webdriverio Android',
      name: 'App tests',
      device: "Google Pixel 6 Pro",
      os_version: "13.0",
      autoGrantPermissions: true,
      app: process.env.BROWSERSTACK_APP_ID || 'bs://2113adf24c7e695469de645934c13641b53eac32',
      'browserstack.debug': true
    }],

    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 20000
    }
  };