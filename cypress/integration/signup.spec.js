describe('Renders Sign up Screen', () => {
  it('renders', () => {
    cy.visit('/signup');
    cy.findByTestId('form-title').should('exist');
    cy.findByPlaceholderText(/email/i).should('exist');
    cy.findByPlaceholderText(/password/i).should('exist');
    cy.findByRole('button', {
      name: /Sign Up/i,
    }).should('exist');
  });
  it('attempts to sign up with empty inputs', () => {
    cy.findByPlaceholderText(/email/i).should('have.value', '');
    cy.findByPlaceholderText(/password/i).should('have.value', '');
    cy.findByRole('button', {
      name: /Sign Up/i,
    }).click();
    cy.findAllByRole('alert').should('have.length', 2);
  });
});
