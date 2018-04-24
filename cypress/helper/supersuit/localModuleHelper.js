module.exports = {
    overrideByEnv
};

// Setting session storage to disable new relic
function overrideByEnv() {
    const localmoduleOverride = window.Cypress.env('LOCALMODULE');

    cy.window().then(function(win) {
        win.sessionStorage.setItem('automation-no-analytics', true);
        if (localmoduleOverride) {
            win.localStorage.localmodule = localmoduleOverride;
        };
    });
}
