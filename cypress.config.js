const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "qhq7p9",
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

      // Allow headless chrome, firefox, edge new mode
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

      // Ensure JSON reporter output path
      on("after:run", (results) => {
        const fs = require("fs");
        const path = "cypress/results/results.json";
        fs.mkdirSync("cypress/results", { recursive: true });
        fs.writeFileSync(path, JSON.stringify(results, null, 2));
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
