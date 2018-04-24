
var idmLoginPage = require('../page-objects/idm_login');
var silver_Rp_HomePage = require('../page-objects/silverRPHomePage');
//var tokenHelper = require('fl-jsuiauto/cypress/helpers/e2e/token-helper');


describe('SilverRP Login ', function() {
    beforeEach(function(){
        cy.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test when non-blocking application errors occur
            return false;
        });
    });

    it('should login successfully 1', function() {
        var idm_login_page = new idmLoginPage(cy);
        var homepage = new silver_Rp_HomePage(cy);
        //var idmTokenHelper = new tokenHelper(cy);

        //idmTokenHelper.getResourceOwnerAccessToken(Cypress.env("username"), Cypress.env("password"), Cypress.env("clientId"), Cypress.env("secret")).then((token) =>{
        //    console.log("Token: " + token);
        //});

        cy.visit("").then(() => {
            console.log("Navigated to ':" + Cypress.env("baseUrl"));
        });

        idm_login_page.enterUserName(Cypress.env("username"));
        idm_login_page.enterPassword(Cypress.env("password"));
        idm_login_page.clickLoginButton();
        homepage.clickProfileLink();
        homepage.verifyProfileScreenText();


    });
});



