function validateVideoPlayer(expectedData) {
    return new Promise( ( resolve ) => {
        cy.get('.vjs-big-play-button').should('be.visible')
        .then( () => {
            return cy.get('.badge-title').should('contain', expectedData.name)
            .then( () => {
                return resolve();
            } );
        } );
    } )
}

module.exports = {
    validateVideoPlayer
};
