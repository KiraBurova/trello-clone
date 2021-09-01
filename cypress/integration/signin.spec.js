describe('Renders Sign in Screen', () => {
  it('renders', () => {
    cy.visit('/signin');
    cy.findByTestId('form-title').should('exist');
    cy.findByPlaceholderText(/email/i).should('exist');
    cy.findByPlaceholderText(/password/i).should('exist');
    cy.findByRole('button', {
      name: /Sign In/i,
    }).should('exist');
  });
  it('sign in successful', () => {
    const uid = Cypress.env('TEST_UID');
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
});
