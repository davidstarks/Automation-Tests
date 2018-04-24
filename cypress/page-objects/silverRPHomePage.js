

var silver_Rp_HomePage = function(cy) {


    var profileLink = '.navbar-nav .profile a';
    var profileScreenData = '.jumbotron pre';

    this.clickProfileLink = function(){
        cy.get(profileLink).click().then(() => {
            console.log("Successfully Clicked Profile Link")
        });
    };

    this.verifyProfileScreenText = function() {
        cy.get(profileScreenData).should('contain', 'employee');
            //.invoke('text').then(($data) => {
            //console.log("Found Profile Screen Text: " + $data);
        //});
    };
};

module.exports = silver_Rp_HomePage;











