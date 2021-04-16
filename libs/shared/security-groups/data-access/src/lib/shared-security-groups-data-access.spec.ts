import { sharedSecurityGroupsDataAccess } from './shared-security-groups-data-access';

describe('sharedSecurityGroupsDataAccess', () => {
  it('should work', () => {
    expect(sharedSecurityGroupsDataAccess()).toEqual(
      'shared-security-groups-data-access'
    );
  });
});
