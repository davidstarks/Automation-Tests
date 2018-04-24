const crypto = require('crypto');

import * as userFixture from '../fixtures/libraryTestData/users';

// TODO: Merge with other places where environment, baseUrl, and logins are stored
const baseUrl = 'https://demo.edivate.com';
const sinetAdminLogin = 'martin.chamberlain@edivate.com';
const sinetAdminPWD = 'sinet123';

const groupKey = 'sampletest2';
const groupSecret = 'de61b71c1d5763712473c6235410e3a3d204ec15470d3621e1';

const resetEdivateUsers = () => {
	// Authenticate as SINET admin and save bearer token
	let options = {
		url: baseUrl + '/api/v1/authentication',
		method: 'POST',
		headers: {
			'x-engine-id': '1dbae407-f228-4803-b1ef-89f6aaf1bb69',
			'x-engine-secret': 'YzM4NmY0MGU0YzAzOWIzMTc1NzgzMTI4ZmQzYTFkYzAwMzIyOGFjMTY2NmU4YTA2YTUzY2U0ZGRlNmU5ZWFjNg=='
		},
		body: {
			loginName: sinetAdminLogin,
			password: sinetAdminPWD,
			updateRecord: 'false'
		}
	}
	cy.request(options).then((response) => {
		// Import users
		const bearerToken = 'Bearer ' + response.body.payload.sessionToken;
		options.url = baseUrl + '/api/v1/sso/ldap/users';
		options.headers.authorization = bearerToken;
		options.body = {
			email: sinetAdminLogin,
			signature: crypto.createHash('sha256').update(bearerToken + groupSecret).digest('hex'),
			token: bearerToken,
			groupKey: groupKey,
			usersArray: userFixture.getUserList(groupKey).EdivateUsers
		}
		console.log('***OPTIONS: ', options)
		cy.request(options).then((response) => {
			expect(response.status).to.equal(200);
		})
	});

}

const getAllIDMUsers = () => {
	return userFixture.getUserList(groupKey).FrontlineUsers;
};

module.exports = {
  getAllIDMUsers,
  resetEdivateUsers
};
