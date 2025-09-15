import { addItemToCart, proceedToCheckout } from '../support/appActions';

describe('Fluxo de Checkout', () => {
  it('Deve adicionar item ao carrinho e finalizar checkout', () => {
    cy.visit('/');
    addItemToCart();
    proceedToCheckout();
  });
});