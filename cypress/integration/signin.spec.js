describe('Renders Sign in Screen', () => {
  it('renders', () => {
    cy.visit('/signin');
    cy.findByTestId('Sign In-title').should('exist');
    cy.findByRole('button', {
      name: /Sign In/i,
    }).should('exist');
  });
  it('sign in successful', () => {
    const uid = Cypress.config().TEST_UID;
    cy.login(uid);
  });
  it('attempts to sign in with empty inputs', () => {
    cy.findByPlaceholderText(/email/i).should('have.value', '');
    cy.findByPlaceholderText(/password/i).should('have.value', '');
    cy.findByRole('button', {
      name: /Sign In/i,
    }).click();
    cy.findAllByRole('alert').should('have.length', 2);
  });
  it('sign in with error', () => {
    cy.findByPlaceholderText(/email/i).type('a@a.com').should('have.value', 'a@a.com');
    cy.findByPlaceholderText(/password/i)
      .type('123456')
      .should('have.value', '123456');
    cy.findByRole('button', {
      name: /Sign In/i,
    }).click();
    cy.findAllByRole('alert').should('have.length', 1);
  });
});
