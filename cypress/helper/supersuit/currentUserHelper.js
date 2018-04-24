// user
const actionPermissions = require('../../fixtures/base/permissionApi/actionPermissions');
const permissionSecurityGroups = require('../../fixtures/base/permissionApi/permissionSecurityGroups');

const fixture = cy => {

		const currentUserRouteStubs = () => {
				cy.route({
								method: 'GET',
								url: '/PermissionAPI/api/Employees/undefined/ActionPermissions?OrganizationId=*',
								response: actionPermissions()
						});
				cy.route({
								method: 'GET',
								url: '/PermissionAPI/api/SecurityGroups/Employee/*',
								response: permissionSecurityGroups()
						});
		};

		return {
				currentUserRouteStubs
		};
}

module.exports = fixture;
