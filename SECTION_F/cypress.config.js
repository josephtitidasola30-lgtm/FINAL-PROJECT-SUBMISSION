const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    charts: true,
    reportPageTitle: "SauceDemo Automation Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },

  e2e: {
    baseUrl: "https://www.saucedemo.com",

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      return config;
    },
  },

  video: true,
  screenshotOnRunFailure: true
});