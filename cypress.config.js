const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 60000,
  reporter: 'mochawesome',
  video: true,
  reporterOptions: {
    overwrite: 'true',
  },
  chromeWebSecurity: false,
  env: {
    angular_url: 'https://rahulshettyacademy.com/angularpractice/',
    automationPractice_url:
      'https://rahulshettyacademy.com/AutomationPractice/',
  },
  projectId: 'uj2t22',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
