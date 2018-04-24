const sessionsFn = require('../../fixtures/base/baseIdm/sessions');
const productaccessUserFn = require('../../fixtures/base/baseIdm/productaccess-user');
const productaccessFn = require('../../fixtures/base/baseIdm/productaccess');
const organizationFn = require('../../fixtures/base/organization/organization');
const organizationBrandFn = require('../../fixtures/base/organization/organization-brand');
const mlpElevateNavFn = require('../../fixtures/base/mlpelevate/navigation');
const mlpElevateNavHelpFn = require('../../fixtures/base/mlpelevate/navigation-help');

const fixture = cy => {
        cy.window().then(function(win) {
            win.sessionStorage.setItem('automation-no-auth', true);
        })

        const baseIdm = () => {
            cy.route({
                method: 'GET',
                url: '/sessions',
                response: sessionsFn()
            });
            cy.route({
                method: 'GET',
                url: '/productaccessservice/v0/api/users/id/*',
                response: productaccessUserFn()
            });
            cy.route({
                method: 'GET',
                url: '/productaccessservice/v0/api/productlinks?userId=*',
                response: productaccessFn()
            });
        };

        const idmSessionState = () => {
            cy.route({
                method: 'POST',
                url: '/sessions/state',
                response: sessionsFn()
            });
        }

        const organization = () => {
            cy.route({
                method: 'GET',
                url: '/OrganizationAPI/api/organizations/*',
                response: organizationFn()
            });
            cy.route({
                method: 'GET',
                url: '/OrganizationAPI/api/organizations/*?fields=branding',
                response: organizationBrandFn()
            });
        };

        const mlpElevate = () => {
            cy.route({
                method: 'GET',
                url: '/mlpelevate/navigation?orgId=*',
                response: mlpElevateNavFn()
            });
            cy.route({
                method: 'GET',
                url: '/mlpelevate/navigation/help?orgId=*',
                response: mlpElevateNavHelpFn()
            });
            cy.route({
                method: 'GET',
                url: '/mlpelevate/messages/unread/count?orgId=*',
                response: 0
            });
            cy.route({
                method: 'GET',
                url: 'https://elevate.flqa.net/mlpelevate/navigation?orgId=*',
                response: mlpElevateNavFn()
            });
            cy.route({
                method: 'GET',
                url: 'https://elevate.flqa.net/mlpelevate/navigation/help?orgId=*',
                response: mlpElevateNavHelpFn()
            });
            cy.route({
                method: 'GET',
                url: 'https://elevate.flqa.net/mlpelevate/messages/unread/count?orgId=*',
                response: 0
            });
        };

        return {
            baseIdm,
            idmSessionState,
            organization,
            mlpElevate
        };
};

module.exports = fixture;
