function validateMCHome(expectedData) {
    cy.get('.icon-nsc-fashion').should('be.visible');
    cy.get('.badge-title').should('contain', expectedData.name);

}

module.exports = {
    validateMCHome
};