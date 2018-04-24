import * as userHelper from '../helper/userHelper';
import * as resourceHelper from '../helper/resourceHelper';
import * as libraryClient from '../helper/libraryAPI';
import * as supersuit from '../helper/supersuit/auth';

describe('Edivate integration with Universal Resource Library', function() {

  context('LTI - User completes Edivate resources', function() {

    before(() => {
      userHelper.resetEdivateUsers();
    });

    userHelper.getAllIDMUsers().forEach((user) => {
      beforeEach(() => {
        supersuit.authenticate(user);   // Provides this.bearerToken
      });

      it('Video test: ' + user.email, function( done ) {
       let resource = resourceHelper.getAllResourceTypes().video;
        libraryClient.completeResource(user, resource, this.bearerToken)
        .then( done );
      });

      it('group: ' + user.email, function ( done ) {
        let resource = resourceHelper.getAllResourceTypes().group;
        libraryClient.completeResource(user, resource, this.bearerToken)
        .then( done );
      });
    });

  })

})
