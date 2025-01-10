describe('Tenant User Flow', () => {
  it('Logs in and views financial details', () => {
    cy.visit('/');
    cy.contains('Log In').click();
    cy.get('input[name="email"]').type('tenant@example.com');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
    cy.contains('Tenant Dashboard').should('be.visible');
  });
});