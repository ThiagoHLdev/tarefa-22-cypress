import CreateAccountPage from '../pages/CreateAccountPage';

describe('Fluxo de Criação de Conta', () => {
  const page = new CreateAccountPage();

  it('Deve criar uma nova conta com sucesso', () => {
    cy.visit('/');
    page.goToSignupPage();
    page.fillSignupForm('Teste', 'teste@example.com', '123456');
    page.submitForm();
    page.checkAccountCreated();
  });
});