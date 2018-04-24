const cardIdentifier = 'card-';
const idIndex = cardIdentifier.length;

/* Exported Functions */

function thumbUpCard() {
	cy
		.get('#card-0')
		.find('.thumb')
		.click();
}

function validateCardByRelevance(expectedData, topX) {
	// Default to the number of cards that fit on a page
	topX = topX || 9;

	cy.contains('.cmp-card.' + expectedData.type, expectedData.name).as('card');

	// Make sure card is relevant enough to show up in topX
	cy
		.get('@card')
		.invoke('attr', 'id')
		.should(id => {
			const cardId = JSON.parse(id).card;
			expect(cardId.substr(idIndex)).to.be.lt(topX);
		});

	// Validate the details on the card
	cy.get('@card').within($card => {
		cy.get('.resource-stat').should('contain', expectedData.stat);
	});
}

function clickResourceThumbnail(resourceToSelect, assertion){
  cy.contains('.cmp-card.' + resourceToSelect.type, resourceToSelect.name).as('card');
  cy.get('@card').within($card => {
		cy.get('.resource-thumbnail').click().then(($action) => {
				assertion();
		});
  });
}

const useSearchBarForSearch = query => {
	cy.server();
	cy.route({
			method: 'POST',
			url: '/api/v1/search/resources'
	}).as('searchQuery');

	cy.get('input#searchTextInput').clear().type(`${query}{enter}`);

	cy.wait('@searchQuery');
}

module.exports = {
	useSearchBarForSearch,
	thumbUpCard,
	validateCardByRelevance,
	clickResourceThumbnail,
};
