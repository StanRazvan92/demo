import { defineConfig } from "cypress";
import {
  addCucumberPreprocessorPlugin,
  afterSpecHandler,
} from "@badeball/cypress-cucumber-preprocessor";
import webpack from "@cypress/webpack-preprocessor";
import fs from "fs";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("after:spec", async (spec, results) => {
    await afterSpecHandler(config, spec, results);

    if (results && results.video) {
      // Do we have failures for any retry attempts?
      const failures = results.tests.some((test) =>
        test.attempts.some((attempt) => attempt.state === "failed")
      );
      if (!failures) {
        // delete the video if the spec passed and no tests retried
        fs.unlinkSync(results.video);
      }
    }
  });

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "ts-loader",
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    setupNodeEvents,
    baseUrl: "https://www.google.com/travel/search",
    specPattern: "**/*.feature",
    chromeWebSecurity: false,

    env: { filterSpecsMixedMode: "show" },

    // Reporting configuration
    video: true,
    videoCompression: 32,
    screenshotsFolder: "reports/screenshots",
    downloadsFolder: "reports/downloads",
    videosFolder: "reports/videos",

    // Default timeout configuration
    defaultCommandTimeout: 5000,

    // View configuration
    viewportHeight: 1024,
    viewportWidth: 1280,

    // Retries configuration
    retries: {
      openMode: 0,
      runMode: 2,
    },
  },
});
