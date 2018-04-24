
var idmLoginPage = function(cy){

    var userNameField = '#Username';
    var passwordField = '#Password';
    var loginButton = '#qa-button-login';

    this.enterUserName = function(username) {
        cy.get(userNameField).type(username);
    };

    this.enterPassword = function(password) {
        cy.get(passwordField).type(password);
    };

    this.clickLoginButton = function(){
        cy.get(loginButton).click();
    };

};

module.exports = idmLoginPage;
