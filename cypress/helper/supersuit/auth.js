const fixtureFactory = require('./baseHelper');
const localModuleHelper = require('./localModuleHelper');
const currentUserFixtureFactory = require('./currentUserHelper');
const employeeFixtureFactory = require('./employeeHelper');
const loginPage = require('../../page-objects/frontlineLogin_page');

function authenticate(user) {

  //TODO: Log in as the actual user that is passed in
  let bodyURL = '&username=' + user.login;
  bodyURL += '&password=' + user.password;
  bodyURL += '&grant_type=password&scope=openid%20flapi.public';
  bodyURL += '&client_secret=secret&client_id=NickPOC';
  let options = {
		url: 'https://idgatewayawsstage.flqa.net/connect/token',
		method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
		body: bodyURL
	};
  cy.request(options).its('body.access_token').as('bearerToken');

}

function login(user) {
  cy.visitWithErrorTracking('').then(() => {
//  cy.visitWithErrorTracking('http://supersuitawsstage.flqa.net').then(() => {
    loginPage.login(user.login, user.password);
  });
}

function mockLogin(user) {
  cy.server();
  let fixtures = fixtureFactory(cy);

  // Base (login)
  fixtures.baseIdm();
  fixtures.organization(); // header context
  fixtures.idmSessionState();
  fixtures.mlpElevate();  // sidekick

  fixtures = currentUserFixtureFactory(cy);
  fixtures.currentUserRouteStubs();

  fixtures = employeeFixtureFactory(cy);
  fixtures.employees();
  fixtures.permissions();
  fixtures.permissionGroups();
  fixtures.locations();
  fixtures.departments();
  fixtures.lists();
  fixtures.jobTypes();
  fixtures.notifications();

  localModuleHelper.overrideByEnv();
}

module.exports = {
  authenticate,
  login,
  mockLogin
};
