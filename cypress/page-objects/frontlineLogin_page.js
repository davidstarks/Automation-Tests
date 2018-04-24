/* Exported Functions */

function login(uid, pwd) {
  cy.get('#Username').clear().type(uid);
  cy.get('#Password').clear().type(pwd);
  cy.get('#qa-button-login').click();
}


module.exports = {
	login
};
