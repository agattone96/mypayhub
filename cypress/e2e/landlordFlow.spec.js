describe('Landlord User Flow', () => {
  it('Logs in as landlord and views tenant details', () => {
    cy.visit('/');
    cy.contains('Log In').click();
    cy.get('input[name="email"]').type('landlord@example.com');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
    cy.contains('Landlord Dashboard').should('be.visible');
    cy.get('table').find('tr').should('have.length.greaterThan', 1);
  });
});