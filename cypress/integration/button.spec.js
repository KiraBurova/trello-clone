describe('Renders Button', () => {
  it('renders', () => {
    cy.visit('/');
    cy.findByText('Create account').should('exist');
  });
});
