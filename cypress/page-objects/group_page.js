function validateGroup(expectedData) {
    return new Promise( resolve => {
        cy.get('.container-smooth').should('be.visible')
        .then( () => {
            cy.get('.page-header-nav').should('contain', expectedData.name)
            .then( () => {
               return resolve(); 
            } );
        } );
    } );
}

module.exports = {
    validateGroup
};
