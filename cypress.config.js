const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
    await preprocessor.addCucumberPreprocessorPlugin(on, config);
    on("file:preprocessor", browserify.default(config));
    return config;
}

module.exports = defineConfig({

  projectId: "3a38oe",

    "defaultCommandTimeout": 10000,
    env: {
        url: "https://www.demoblaze.com/index.html",
        Username: "Johnlaw",
        Password: "qwerty824"
    },

    e2e: {
        setupNodeEvents,
        includeShadowDom: true,
        specPattern: 'cypress/integration/BDD/*.feature',
    },
});
