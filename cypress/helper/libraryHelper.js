const adminPage = require('../page-objects/adminView_page');

function Library() {

	this.validateCard = (resource) => {
		adminPage.validateCardByRelevance(resource);
	}

	const stubs = resource => {
		const ltiStub = xhr => {
	      expect(xhr.request.body.custom_item_id).to.equal(resource.id);
				expect(xhr.request.body.custom_item_type).to.equal(resource.type);
	  };
		return {
			ltiStub: ltiStub
		}
	}

	// TODO: Refactor this after confirming how error validation will work
	this.likeCard = () => {
		adminPage.thumbUpCard();
	};

	this.search = resource => {
		adminPage.useSearchBarForSearch(resource.searchString);
		this.validateCard(resource);
	};

  this.clickCardToPerformAction = (resource) => {

    // Stub LTI calls
    cy.server();

		const stubObj = stubs(resource);
		cy.spy(stubObj, 'ltiStub');

    cy.route({
      method: 'POST',
      url: 'https://resourcelibrary-qa.ss.frontlineeducation.com/lti',
      status: 200,
      response: {},
      onRequest: stubObj.ltiStub
    });

    adminPage.clickResourceThumbnail(resource,
			                               () => {expect(stubObj.ltiStub).to.be.called;});
  }

}


// TODO: Change this to simulate link from PLM when it is implemented
function openLibrary() {
	cy.visitWithErrorTracking('/ec-resource-library/library');
	return new Library();
}

module.exports = {
	Library,
	openLibrary,
};
