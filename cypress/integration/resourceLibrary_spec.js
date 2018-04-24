const libraryHelper = require('../helper/libraryHelper');
const userHelper = require('../helper/userHelper');
const resourceHelper = require('../helper/resourceHelper');
const supersuit = require('../helper/supersuit/auth');



describe('Universal Resource Library - E2E Tests', function() {
	// Use full matrix of users & hierarchies to ensure LTI works E2E
	context('User browses library', function() {
		userHelper.getAllIDMUsers().forEach(user => {
			it('User: ' + user.email, function() {
				//supersuit.mockLogin(user);
				supersuit.login(user);
				let library = libraryHelper.openLibrary();

				resourceHelper.getAllResourceTypes().forEach(resource => {
					library.search(resource);
					library.clickCardToPerformAction(resource);
				});
			});
		});

		afterEach(() => {
			//	cy.validateErrorCount();
		});
	});
});
