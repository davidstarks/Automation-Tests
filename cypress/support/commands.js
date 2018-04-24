// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command used for stubbing out functions --
//    It will generally pass, but it will fail if it is blocked on the current story

Cypress.Commands.add("visitWithErrorTracking", (url) => {
  cy.visit(url, {
    onBeforeLoad (win) {
      cy.spy(win.console, 'error');

      // Block new windows from being created since Cypress can't handle them
      cy.stub(win, 'open', () => {});
    }
  }).then(() => {
//    cy.get('#Username').clear().type('foobar');
  });
//  cy.wait(10000);
});

// TODO: Clean this up to still catch some exceptions
//      https://docs.cypress.io/api/events/catalog-of-events.html#Uncaught-Exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Cypress.Commands.add("validateErrorCount", (count) => {
  let expectedCount = count || 1;  // Hard-coding to 1 until bad test data (TDD card) is removed
  cy.window().its('console')
    .its('error')
    .its('callCount')
    .should('equal', expectedCount);
});

Cypress.Commands.add("randomInteger", (min, max) => {
  return Math.random() * (max - min) + min;
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
