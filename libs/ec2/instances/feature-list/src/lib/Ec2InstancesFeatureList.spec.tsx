import { render } from '@testing-library/react';

import ListInstancesPage from './ListInstancesPage';

describe('Ec2InstancesFeatureList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListInstancesPage />);
    expect(baseElement).toBeTruthy();
  });
});
