class CreateAccountPage {
  goToSignupPage() {
    cy.get('a[href="/login"]').click();
  }

  fillSignupForm(nome, email, senha) {
    cy.get('input[data-qa="signup-name"]').type(nome);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();
    cy.get('input[id="password"]').type(senha);
  }

  submitForm() {
    cy.get('button[data-qa="create-account"]').click();
  }

  checkAccountCreated() {
    cy.contains('Account Created!').should('be.visible');
  }
}

export default CreateAccountPage;