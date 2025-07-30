const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: false, // I like to see the tests run 
    baseURL: 'https://xn--james-farmer-2025-07-24-6w2n.cookieclickertechtest.airelogic.com/',
  },
});