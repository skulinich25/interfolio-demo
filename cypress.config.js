const { defineConfig } = require("cypress");


module.exports = defineConfig({
  "chromeWebSecurity": false,
  e2e: {
    baseUrl:'https://www.interfolio.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
