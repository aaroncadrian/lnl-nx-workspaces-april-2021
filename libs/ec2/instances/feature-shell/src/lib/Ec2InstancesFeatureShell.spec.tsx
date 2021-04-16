import { render } from '@testing-library/react';

import Ec2InstancesFeatureShell from './Ec2InstancesFeatureShell';

describe('Ec2InstancesFeatureShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ec2InstancesFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
