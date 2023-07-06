describe('Frontend App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Displays correct heading', () => {
    cy.get('h1').should('contain', 'Data from Backend');
  });

  it('Displays correct number of list items', () => {
    cy.get('ul li').should('have.length', 3);
  });
});
