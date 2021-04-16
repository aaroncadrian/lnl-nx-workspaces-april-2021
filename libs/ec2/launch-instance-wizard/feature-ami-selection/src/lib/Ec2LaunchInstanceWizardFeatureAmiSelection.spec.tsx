import { render } from '@testing-library/react';

import Ec2LaunchInstanceWizardFeatureAmiSelection from './Ec2LaunchInstanceWizardFeatureAmiSelection';

describe('Ec2LaunchInstanceWizardFeatureAmiSelection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Ec2LaunchInstanceWizardFeatureAmiSelection />
    );
    expect(baseElement).toBeTruthy();
  });
});
