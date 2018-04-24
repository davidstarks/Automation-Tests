const employeeFn = require('../../fixtures/base/ec/employee');
const permissionFn = require('../../fixtures/base/ec/permission');
const permissionGroupsFn = require('../../fixtures/base/ec/permissionSecurityGroups')
const locationFn = require('../../fixtures/base/ec/location');
const departmentFn = require('../../fixtures/base/ec/department');
const listFn = require('../../fixtures/base/ec/list');
const jobTypeFn = require('../../fixtures/base/ec/jobType');
const notificationFn = require('../../fixtures/base/ec/notification');

const fixture = cy => {

        const employees = () => {
            cy.route({
                method: 'GET',
                url: '/EmployeeAPI/api/employees/*',
                response: employeeFn()
            });
        };

        const permissions = () => {
            cy.route({
                method: 'GET',
//                url: '/PermissionAPI/api/Employees/*/ActionPermissions',
                url: '/PermissionAPI/api/ActionPermissions?organizationId=*',
                response: permissionFn()
            });
        };

        const permissionGroups = () => {
            cy.route({
                method: 'GET',
                //url: '/PermissionAPI/api/Employees/*/ActionPermissions',
                url: '/PermissionAPI/api/SecurityGroups/Employee/*?organizationId=*',
                response: permissionGroupsFn()
            });
        };

        // TODO: I should probably move these to the organizations fixture folder
        const locations = () => {
            cy.route({
                method: 'GET',
                url: '/LocationAPI/api/organizations/*/locations?limit=*',
                response: locationFn()
            });
        };

        const departments = () => {
            cy.route({
                method: 'GET',
                url: '/DepartmentAPI/api/organizations/*/Departments?limit=*',
                response: departmentFn()
            });
        };

        const lists = () => {
            cy.route({
                method: 'GET',
//                url: '/ListAPI/api/organizations/*/lists?externalId=jobtype.employmentgroups&include=Items',
                url: '/ListAPI/api/organizations/*/lists?externalId=*.*&include=Items',
                response: listFn()
            });
        };

        const jobTypes = () => {
            cy.route({
                method: 'GET',
                url: '/JobTypeAPI/api/organizations/*/jobTypes?include=paySchedules&limit=*',
                response: jobTypeFn()
            });
        };

        const notifications = () => {
            cy.route({
              method: 'GET',
              url: 'NotificationAPI/api/employees/*/notifications',
              response: notificationFn()
            });
        }

        return {
            employees,
            permissions,
            permissionGroups,
            locations,
            departments,
            lists,
            jobTypes,
            notifications
        };
};

module.exports = fixture;
