import { sharedSubnetsDataAccess } from './shared-subnets-data-access';

describe('sharedSubnetsDataAccess', () => {
  it('should work', () => {
    expect(sharedSubnetsDataAccess()).toEqual('shared-subnets-data-access');
  });
});
