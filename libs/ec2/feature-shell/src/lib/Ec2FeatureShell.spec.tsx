import { render } from '@testing-library/react';

import Ec2FeatureShell from './Ec2FeatureShell';

describe('Ec2FeatureShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ec2FeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
