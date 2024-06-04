/* ==== Test Created with Cypress Studio ==== */
it('Check Clickable Diag', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('http://localhost:5173/');
  cy.get('#a_node6 > a > text').click();
  cy.get('#test_id').click();
  cy.get('#a_node1 > a > text').click();
  cy.get('#test_id').click();
  cy.get('#a_node5 > a > text').click();
  cy.get('#test_id').click();
  cy.get('#a_node2 > a > text').click();
  cy.get('#test_id').click();
  cy.get('#a_node3 > a > text').click();
  cy.get('#test_id').click();
  cy.get('#a_node4 > a > text').click();
  cy.get('#test_id').click();
  /* ==== End Cypress Studio ==== */
});