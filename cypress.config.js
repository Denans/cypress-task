const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    chromeWebSecurity: false,
    viewportHeight: 800,
    viewportWidth: 1500,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
