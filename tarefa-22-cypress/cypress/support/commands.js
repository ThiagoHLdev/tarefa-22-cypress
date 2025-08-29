Cypress.Commands.add('setStoreCookie', () => {
  cy.setCookie('ebacStoreVersion', 'v2');
});