/// <reference types="cypress" />
import { dynamicUser } from '../utils/data';

describe('Carrinho de Compras - API intercept', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.setStoreCookie();
  });

  it('Adicionar item ao carrinho', () => {
    const item = { id: 101, name: 'Produto Teste', quantity: 1 };

    cy.intercept('POST', '/api/cart', {
      statusCode: 200,
      body: { success: true, item }
    }).as('addItem');

    cy.request('POST', '/api/cart', item).as('reqAdd');
    cy.wait('@addItem').its('response.statusCode').should('eq', 200);
  });

  it('Remover item do carrinho', () => {
    const itemId = 101;

    cy.intercept('DELETE', `/api/cart/${itemId}`, {
      statusCode: 200,
      body: { success: true, removed: itemId }
    }).as('removeItem');

    cy.request('DELETE', `/api/cart/${itemId}`).as('reqRemove');
    cy.wait('@removeItem').its('response.statusCode').should('eq', 200);
  });

  it('Atualizar item do carrinho', () => {
    const update = { id: 101, quantity: 3 };

    cy.intercept('PUT', `/api/cart/${update.id}`, {
      statusCode: 200,
      body: { success: true, updated: update }
    }).as('updateItem');

    cy.request('PUT', `/api/cart/${update.id}`, update).as('reqUpdate');
    cy.wait('@updateItem').its('response.statusCode').should('eq', 200);
  });

  it('Utilizar dados dinâmicos', () => {
    const user = dynamicUser();
    expect(user.name).to.be.a('string');
    expect(user.email).to.include('@');
    cy.log(`Usuário gerado: ${user.name} - ${user.email} - ${user.price}`);
  });

});