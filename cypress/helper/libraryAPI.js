const crypto = require('crypto');
import * as resourceHelper from './resourceHelper';
import * as userHelper from './userHelper';

// TODO: Reconcile this with library functions in the libraryHelper.js
// export function Library(resource, groupKey, groupSecret) {
//   this.resource = resource;
//   this.groupKey = groupKey;
//   this.groupSecret = groupSecret;

export function completeResource(user, resource, bearerToken) {
  processLTIRequest(user, resource, bearerToken);
  expect(true).to.equal(true);
};

const processLTIRequest = (user, resource, bearerToken) => {
  let options = {
    url: 'https://resourcelibrary-qa.ss.frontlineeducation.com/lti',
    method: 'POST',
    followRedirect: false,
    headers: {
      authorization: 'Bearer ' + bearerToken,
      'content-type': 'application/json'
    },
    body: {
      "launch_url" : "https://demo.edivate.com",
      "custom_item_type": resource.type,
      "custom_item_id": resource.id
    }
  };
  cy.request(options).then((response) => {
    expect(response.status).to.equal(302);
    cy.visit(response.body);
    cy.get('.vjs-big-play-button').should('be.visible');
  });
}
