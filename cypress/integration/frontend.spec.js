describe('Frontend App', () => {
    it('Displays data from the backend', () => {
        cy.visit('/');
        cy.get('ul li').should('have.length', 3);
    });
});
