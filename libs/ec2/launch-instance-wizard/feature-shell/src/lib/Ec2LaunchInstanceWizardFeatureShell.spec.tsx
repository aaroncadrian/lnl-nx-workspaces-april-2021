import { render } from '@testing-library/react';

import Ec2LaunchInstanceWizardFeatureShell from './Ec2LaunchInstanceWizardFeatureShell';

describe('Ec2LaunchInstanceWizardFeatureShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ec2LaunchInstanceWizardFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
