import { render } from '@testing-library/react';

import Ec2FeatureDashboard from './Ec2FeatureDashboard';

describe('Ec2FeatureDashboard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ec2FeatureDashboard />);
    expect(baseElement).toBeTruthy();
  });
});
