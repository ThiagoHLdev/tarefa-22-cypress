const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ebac-shop.example.com',
    setupNodeEvents(on, config) {
      require('allure-cypress/plugin')(on, config);
      return config;
    },
  },
  env: {
    allure: true
  }
});