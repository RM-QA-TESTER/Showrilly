const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "qhq7p9",

  // Configure reporter for JSON output
  reporter: "json",
  reporterOptions: {
    outputFile: process.env.CYPRESS_OUTPUT_JSON || "cypress/results/results.json"
  },

  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",

    setupNodeEvents(on, config) {
      const envName = config.env.environment || "staging";

      const baseUrls = {
        staging: "https://staging.showrilly.com/",
        release: "https://showrilly-release-3cd52a325561.herokuapp.com/sign_in",
        prod: "https://app.showrilly.com/sign_in"
      };

      config.baseUrl = baseUrls[envName];

      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.isHeadless) {
          if (browser.name === "firefox") {
            launchOptions.args.push("--headless=new");
          } else if (browser.name === "chrome" || browser.name === "edge") {
            const version = parseInt(browser.majorVersion);
            if (version >= 124) {
              launchOptions.args.push("--headless=new");
            }
          }
        }
        return launchOptions;
      });

      return config;
    },

    pageLoadTimeout: 120000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    numTestsKeptInMemory: 0,
    retries: 1,
    chromeWebSecurity: false,

    // Default environment
    env: {
      environment: "staging", // default if nothing passed
    },
  },
});
