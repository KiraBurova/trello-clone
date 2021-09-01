describe('Logout', () => {
  it('successfull logout', () => {
    const uid = Cypress.config().TEST_UID;
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
