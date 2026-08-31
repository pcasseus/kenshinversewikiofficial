import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // Point Cypress commands like cy.visit() to your Vite dev server
    baseUrl: "http://localhost:5173",

    // Tell Cypress where to load the support file (where you put your e2e.js)
    supportFile: "cypress/support/e2e.js",

    // Match any .cy.js/.cy.jsx/.cy.ts/.cy.tsx files under cypress/e2e
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",

    setupNodeEvents(on, config) {
      // implement node event listeners here if you need them
      return config;
    },
  },
});
