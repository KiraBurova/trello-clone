describe('Logout', () => {
  it('successful logout', () => {
    const uid = Cypress.env('TEST_UID');
    cy.login(uid);

    cy.visit('/');
    cy.findByRole('button', {
      name: /Logout/i,
    }).should('exist');

    cy.logout();
    cy.findByRole('button', {
      name: /Logout/i,
    }).should('not.exist');
  });
});
