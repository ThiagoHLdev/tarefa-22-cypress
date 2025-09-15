export function addItemToCart() {
  cy.get('a[href="/product_details/1"]').click();
  cy.get('button[class="btn btn-default cart"]').click();
}

export function proceedToCheckout() {
  cy.get('a[href="/view_cart"]').click();
  cy.contains('Proceed To Checkout').click();
}