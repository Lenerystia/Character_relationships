/* ==== Test Created with Cypress Studio ==== */
it('Check Buttons', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:5173/');
  cy.get('[name="characters"]').click();
  cy.get('[name="relations"]').click();
  cy.get('[name="/"]').click();
  /* ==== End Cypress Studio ==== */
});