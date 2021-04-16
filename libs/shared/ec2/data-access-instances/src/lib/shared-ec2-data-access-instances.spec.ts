import { sharedEc2DataAccessInstances } from './shared-ec2-data-access-instances';

describe('sharedEc2DataAccessInstances', () => {
  it('should work', () => {
    expect(sharedEc2DataAccessInstances()).toEqual(
      'shared-ec2-data-access-instances'
    );
  });
});
